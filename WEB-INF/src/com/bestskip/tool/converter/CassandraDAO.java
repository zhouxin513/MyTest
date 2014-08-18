/**
 *
 */
package com.bestskip.tool.converter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;


import com.datastax.driver.core.BatchStatement;
import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.ConsistencyLevel;
import com.datastax.driver.core.Host;
import com.datastax.driver.core.Metadata;
import com.datastax.driver.core.PreparedStatement;
import com.datastax.driver.core.RegularStatement;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.core.Session;
import com.datastax.driver.core.SimpleStatement;


public class CassandraDAO {

	private Cluster cluster;
	private Session session;
	private String node = "locahost";
	private String dbName = "jspconvertor";
	public static String TYPE_UUID = "UUID";
	public static String TYPE_STRING = "TYPE_STRING";
	public static String TYPE_TIMESTAMP = "TYPE_TIMESTAMP";
	public static String TYPE_FLOAT = "TYPE_FLOAT";

	public CassandraDAO() {
		cluster = new Cluster.Builder().addContactPoint(node).build();

		Metadata metadata = cluster.getMetadata();
		System.out.printf("Connected to cluster: %s\n",
				metadata.getClusterName());

		for (Host host : metadata.getAllHosts()) {
			System.out.printf("Datatacenter: %s; Host: %s; Rack: %s\n",
					host.getDatacenter(), host.getAddress(), host.getRack());
		}

		this.connect(dbName);

	}

	/**
	 * @param nodes
	 *            a host name or IP address of the node in the cluster
	 * @return true:init success. false:init false.
	 */

	protected void connect(String keyspace) {

		if (session == null) {
			session = cluster.connect(keyspace);
		}
	}

	/**
	 * Returns the current session.
	 * 
	 * @return the current session to execute statements on
	 */
	public Session getSession() {
		return this.session;
	}

	public void close() {
		session.close();
		cluster.close();
	}

	public ResultSet execute(String CQL, ArrayList<CassandraObj> paramList)
			throws ParseException {

		RegularStatement toPrepare = (RegularStatement) new SimpleStatement(CQL)
				.setConsistencyLevel(ConsistencyLevel.QUORUM);
		PreparedStatement prepared = session.prepare(toPrepare);
		BatchStatement batch = new BatchStatement();

		if (paramList != null && paramList.size() != 0) {

			Object[] inputObj = new Object[paramList.size()];
			for (int i = 0; i < paramList.size(); i++) {

				CassandraObj obj = paramList.get(i);

				if (CassandraDAO.TYPE_TIMESTAMP.equals(obj.getType())) {
					SimpleDateFormat dateFormat = new SimpleDateFormat(
							"yyyy-MM-dd HHmmSS");
					inputObj[i] = dateFormat.parse(obj.getValue());
				} else if (CassandraDAO.TYPE_FLOAT.equals(obj.getType())) {
					inputObj[i] = Float.valueOf(obj.getValue());
				} else {
					inputObj[i] = paramList.get(0).getValue();
				}

			}
			batch.add(prepared.bind(inputObj));
			return session.execute(batch);
		} else {
			return session.execute(CQL);
		}

	}

	
	public ResultSet executeByObject(String CQL, ArrayList<Object> paramList)
			throws ParseException {

		RegularStatement toPrepare = (RegularStatement) new SimpleStatement(CQL)
				.setConsistencyLevel(ConsistencyLevel.QUORUM);
		PreparedStatement prepared = session.prepare(toPrepare);
		BatchStatement batch = new BatchStatement();

		if (paramList != null && paramList.size() != 0) {

			Object[] inputObj = new Object[paramList.size()];
			for (int i = 0; i < paramList.size(); i++) {

				inputObj[i] = paramList.get(i);

			}
			batch.add(prepared.bind(inputObj));
			return session.execute(batch);
		} else {
			return session.execute(CQL);
		}

	}
	 

	
	
	/*
	public class preparStatment {
	private static final String CQL = null;
	RegularStatement toPrepare = (RegularStatement) new SimpleStatement(CQL)
			.setConsistencyLevel(ConsistencyLevel.QUORUM);
	PreparedStatement prepared = session.prepare(toPrepare);
	
	}
	
	Session session = sessionProvider.getSession();
	try {
	PreparedStatement ps = session.prepare(cql);
	ResultSet rs = session.execute(ps.bind(objects));
	if (irsr != null) {
	irsr.read(rs);
	}
	}
	

	public ResultSet executeByObject(String CQL, ArrayList<Object> paramList)
			throws ParseException {
		BatchStatement batch = new BatchStatement();

		if (paramList != null && paramList.size() != 0) {

			Object[] inputObj = new Object[paramList.size()];
			for (int i = 0; i < paramList.size(); i++) {

				inputObj[i] = paramList.get(i);
			}
			batch.add(prepared.bind(inputObj));
			return session.execute(batch);
		} else {
			return session.execute(CQL);
		}

	}
	
	*/
	
	
	
	
	

	public ResultSet selectAll(String CQL, ArrayList<CassandraObj> paramList)
			throws ParseException {

		RegularStatement toPrepare = (RegularStatement) new SimpleStatement(CQL)
				.setConsistencyLevel(ConsistencyLevel.QUORUM);
		PreparedStatement prepared = session.prepare(toPrepare);
		BatchStatement batch = new BatchStatement();

		if (paramList != null && paramList.size() != 0) {

			Object[] inputObj = new Object[paramList.size()];
			for (int i = 0; i < paramList.size(); i++) {

				CassandraObj obj = paramList.get(i);

				if (CassandraDAO.TYPE_TIMESTAMP.equals(obj.getType())) {
					SimpleDateFormat dateFormat = new SimpleDateFormat(
							"yyyy-MM-dd HHmmSS");
					inputObj[i] = dateFormat.parse(obj.getValue());
				} else if (CassandraDAO.TYPE_FLOAT.equals(obj.getType())) {
					inputObj[i] = Float.valueOf(obj.getValue());
				} else {
					inputObj[i] = paramList.get(0).getValue();
				}

			}
			batch.add(prepared.bind(inputObj));
			return session.execute(batch);
		} else {
			return session.execute(CQL);
		}

	}

}
