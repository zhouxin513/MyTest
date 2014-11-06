package recall;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

public class GetClientInfo {
       /** ブラウザ不明 */
       public static String BROWSER_UNKNOWN = "0";
       /** ブラウザIE */
       public static String BROWSER_IE = "1";
       /** ブラウザFirefox */
       public static String BROWSER_FIREFOX = "2";
       /** ブラウザOpera */
       public static String BROWSER_OPERA = "3";
       /** ブラウザChrome */
       public static String BROWSER_CHROME = "4";
       /** ブラウザSafari */
       public static String BROWSER_SAFARI = "5";
       /** ブラウザNetscape */
       public static String BROWSER_NETSCAPE = "6";

       /**
         * ブラウザの判定を行います。
         * @param request {@link HttpServletRequest}
         * @return ブラウザを表す文字列
         */
       public static String getBrowser(String sUserAgent) {

           if ( isIE(sUserAgent) ) {
               return BROWSER_IE;
           }
           if ( isFirefox(sUserAgent) ) {
               return BROWSER_FIREFOX;
           }
           if ( isOpera(sUserAgent) ) {
               return BROWSER_OPERA;
           }
           if ( isChrome(sUserAgent) ) {
               return BROWSER_CHROME;
           }
           if ( isSafari(sUserAgent) ) {
               return BROWSER_SAFARI;
           }
           if ( isNetscape(sUserAgent) ) {
               return BROWSER_NETSCAPE;
           }
           return BROWSER_UNKNOWN;
       }

       /**
         * touchの判定を行います。
         * @param request {@link HttpServletRequest}
         * @return touchかどうか
         */
       public static boolean isTouch(String sUserAgent) {

           if ( isWindowsPad(sUserAgent) ) {
               return true;
           }
           if ( isApplePad(sUserAgent) ) {
               return true;
           }
           if ( isAndroidPad(sUserAgent) ) {
               return true;
           }

           return false;
       }

       /**
         * windowsブラウザがToutchであるかどうかの判定を行います。
         * @param sUserAgent ユーザエージェント
         * @return WindowsPadであるかどうか
         */
       public static boolean isWindowsPad(String sUserAgent) {
              if (isIE(sUserAgent)) {

                  return sUserAgent.contains("Touch");
              }

           return false;
       }

       /**
         * AppleのToutchであるかどうかの判定を行います。
         * @param sUserAgent ユーザエージェント
         * @return ApplePadであるかどうか
         */
       public static boolean isApplePad(String sUserAgent) {
           if (sUserAgent.contains("iPad")) {
              return true;
           }

           if (sUserAgent.contains("iPod Touch")) {
              return true;
           }

           if (sUserAgent.contains("iPhone")) {
              return true;
           }
           return false;
       }

       /**
         * AndroidのToutchであるかどうかの判定を行います。
         * @param sUserAgent ユーザエージェント
         * @return AndroidPadであるかどうか
         */
       public static boolean isAndroidPad(String sUserAgent) {
           return sUserAgent.contains("Android");
       }
       /**
         * ブラウザがIEであるかどうかの判定を行います。
         * @param sUserAgent ユーザエージェント
         * @return IEであるかどうか
         */
       public static boolean isIE(String sUserAgent) {
           if (sUserAgent.contains("MSIE") ||
                     sUserAgent.contains("Trident")) {
              return true;
           }
           return false;
       }


       /**
         * ブラウザがFirefoxであるかどうかの判定を行います。
         * @param sUserAgent ユーザエージェント
         * @return Firefoxであるかどうか
         */
       public static boolean isFirefox(String sUserAgent) {
              return sUserAgent.contains("Firefox");
       }


       /**
         * ブラウザがOperaであるかどうかの判定を行います。
         * @param sUserAgent ユーザエージェント
         * @return Opereであるかどうか
         */
       public static boolean isOpera(String sUserAgent) {
           return sUserAgent.contains("Opera");
       }


       /**
         * ブラウザがChromeであるかどうかの判定を行います。
         * @param sUserAgent ユーザエージェント
         * @return Chromeであるかどうか
         */
       private static boolean isChrome(String sUserAgent) {
           return sUserAgent.contains("Chrome");
       }


       /**
         * ブラウザがSafariであるかどうかの判定を行います。
         * @param sUserAgent ユーザエージェント
         * @return Safariであるかどうか
         */
       private static boolean isSafari(String sUserAgent) {
           Pattern pattern = Pattern.compile(".*((Version/)+[0-9]\\.?[0-9]?\\.?[0-9]? Safari).*");
           Matcher matcher = pattern.matcher(sUserAgent);
           boolean bMatch = matcher.matches();
           return bMatch;
       }


       /**
         * ブラウザがNetscapeであるかどうかの判定を行います。
         * @param sUserAgent ユーザエージェント
         * @return Netscapeであるかどうか
         */
       private static boolean isNetscape(String sUserAgent) {
           Pattern pattern = Pattern.compile(".*((Netscape)+[0-9]\\.[0-9][0-9]?).*");
           Matcher matcher = pattern.matcher(sUserAgent);
           boolean bMatch = matcher.matches();
           return bMatch;
       }
}
