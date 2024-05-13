/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

/*global form2js, saveAs, document, window, alert, navigator*/
/*jshint loopfunc:true */
var configText;
(function (global, undefined) {
    "use strict";
    /*jslint white: true */
    var doc = global.document,
        get = null,
        forEach = null,
        query = function (selector, scope) { return (scope || doc).querySelectorAll(selector); },
        attachAddMoreHandler = null,
        attachRemoveInstantlyHandler = null,
        createBlob = (function () {
            var prefixes = ["", "WebKit", "Moz", "MS"],
                i,
                len = prefixes.length,
                prefix,
                func = null,
                url_supported = (global.URL || global.webkitURL);
            if (typeof global.Blob === "function" && url_supported) {
                func = function (parts, type) {
                    return new global.Blob(parts, type);
                };
            } else if (url_supported) {
                for (i = 0; i < len; i += 1) {
                    prefix = prefixes[i];
                    if (typeof global[prefix + "BlobBuilder"] === "function") {
                        func = function (parts, type) {
                            var content = parts.join(""),
                                builder = new global[prefix + "BlobBuilder"]();
                            builder.append(content);
                            return builder.getBlob(type.type + ";charset=UTF-8");
                        };
                        break;
                    }
                }
            }
            return func;
        }()),
        browserLanguage = (
            navigator.language.toLowerCase().substring(0, 2) === "de" ||
            navigator.language.toLowerCase().substring(0, 2) === "en" ||
            navigator.language.toLowerCase().substring(0, 2) === "es" ||
            navigator.language.toLowerCase().substring(0, 2) === "fr" ||
            navigator.language.toLowerCase().substring(0, 2) === "it" ||
            navigator.language.toLowerCase().substring(0, 2) === "ja" ||
            navigator.language.toLowerCase().substring(0, 2) === "ko" ||
            navigator.language.toLowerCase().substring(0, 2) === "ru" ||
            navigator.language.toLowerCase().substring(0, 2) === "zh"
        ) ? navigator.language.toLowerCase().substring(0, 2) :
                (
                    (navigator.language.toLowerCase() === "zh-hant") ? "zhHant" :
                            (
                                (navigator.language.toLowerCase() === "pt-br") ? "ptBR" : "en"
                            )
                ),
        language = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent("language").replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || browserLanguage,
        i18n = {
            de: // NLS_CHARSET=UTF-8
{
                "site-title": "UIC-Konfigurationsassistent",
                "page-headline": "UIC-Konfigurationsassistent",
				"uic-version": "UIC-Version ",
                "advanced-options": "Erweiterte Optionen",
                "btn-prev": "Vorherig",
                "btn-next": "Weiter",
                "btn-finish": "Fertig",
                "btn-reset": "Auf Standard zurücksetzen",
                "btn-regextester": "RegEx-Tester",

                "library-type-prod-min": "Produktionsbuild (minimiert)",
                "library-type-prod": "Produktionsbuild (nicht minimiert)",
                "library-type-dev": "Entwicklungsbuild (nicht minimiert)",

                "core-inactivityTimeout": "Inaktivitätszeitlimit (Millisekunden)",
                "core-inactivityTimeout-helptext": "Das Inaktivitätszeitlimit gibt einen Wert für das Zeitlimit an, in dem UIC bei nicht vorhandener Benutzeraktivität von selbst beendet wird. " +
                                                   "Der integrierte Zeitlimitwert in Höhe von 10 Minuten wird verwendet, wenn kein Inaktivitätszeitlimitwert angegeben wurde. " +
                                                   "<br /><em>Hinweis:</em> Durch die Angabe eines Zeitlimitwerts in Höhe von 0 wird diese Funktion inaktiviert. Dies könnte zu verwaisten Treffern in der Benutzerschnittstelle führen und wird nicht empfohlen.",

                "browserService-header": "Konfiguration des Browserdiensts",
                "browserService-subHeader": "Version auswählen: ",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "Eine jQuery-Version wird nur unterstützt, wenn die Webanwendung jQuery 1.7 oder eine aktuellere Version verwendet.",
                "browserService-jQuery-description": "Die jQuery-Version der UIC-Bibliothek verwendet die jQuery-API für browserübergreifenden DOM-Zugriff. ",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "Für alle anderen. ",
                "browserService-w3c-description": "Die W3C-Version der UIC-Bibliothek verwendet direkt Browser-DOM-APIs. " +
                                                  "<br /><em>Hinweis:</em> Zum Einschließen der W3C-Version ist eine Sizzle JS-Drittanbieterbibliothek erforderlich. Informationen hierzu finden Sie im Abschnitt zur Sizzle-URL in den erweiterten Optionen. ",

                "browserService-useCapture": "Verwenden Sie die Erfassungsphase für die Empfangsbereitschaft für Ereignisse",
                "browserService-useCapture-helptext": "Aktiviert die Ereigniserfassungsphase bei der Registrierung der Ereignislistener. Ist diese Einstellung inaktiviert, wird Event-Bubbling verwendet. Dies kann dazu führen, dass einige Ereignisse fehlen, wenn diese vom Bubbling ausgeschlossen sind. Es wird empfohlen, diese Einstellung zu aktivieren." +
                                                      "<br /><em>Hinweis:</em> Ältere Versionen von Internet Explorer (IE 8 und älter) unterstützen die Ereigniserfassungsphase nicht und werden automatisch auf die Verwendung von Event-Bubbling zurückgesetzt." +
                                                      "<br />Weitere Einzelheiten zu dieser Einstellung finden Sie unter der W3C-DOM-Spezifikation: http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture",
                "browserService-sizzleObject": "Sizzle-Objekt",
                "browserService-sizzleObject-helptext": "Pfad zum Sizzle-Objekt. Wenn kein Wert angegeben ist, wird standardmäßig 'window.Sizzle' verwendet. " +
                                                        "<br /><br /><em>Hinweis:</em> Sizzle ist für das ordnungsgemäße Funktionieren der Bibliothek in älteren Versionen von Internet Explorer (IE 8 und älter) bei Verwendung des W3C-Service erforderlich." +
                                                        " Wenn die Anwendung eine jQuery-Version verwendet, ist das separate Einbeziehen von Sizzle nicht erforderlich, da Sizzle bereits in jQuery enthalten ist." +
                                                        " Sizzle kann unter http://sizzlejs.com/ abgerufen werden",
                "browserService-jQueryObject": "jQuery-Objekt",
                "browserService-jQueryObject-helptext": "Pfad zum jQuery-Objekt. Wenn kein Wert angegeben ist, wird standardmäßig 'window.jQuery' verwendet. ",
                "browserService-blacklistedElements": "In Blacklist aufgeführte Elemente",
                "browserService-blacklistedElements-placeholder": "IDs oder reguläre Ausdrücke, getrennt durch Leerzeichen, Komma, Leerzeichen. ",
                "browserService-blacklistedElements-helptext": "Nehmen Sie alle Element-IDs in eine Blacklist auf, die nicht eindeutig und/oder dynamisch generiert sind. Element-IDs, die mit einem der Blacklist-Einträge übereinstimmen, werden durch benutzerdefinierte Attributwerte oder XPath ersetzt. " +
                                                               "<br /><br />Tipp: Verwenden Sie den RegEx-Tester zum Überprüfen der regulären Ausdrücke beim Konfigurieren der Blacklist. ",
                "browserService-customID": "Benutzerdefinierte Attribut-ID",
                "browserService-customID-placeholder": "Attributname. ",
                "browserService-customID-helptext": "Mindestens ein Attribut, das dazu verwendet werden kann, ein Element eindeutig zu kennzeichnen, wenn die HTML-ID nicht verfügbar oder in der Blacklist aufgeführt ist. ",
				"browserService-ieExcludedLinks": "Von Internet Explorer ausgeschlossene Links",
				"browserService-ieExcludedLinks-placeholder": "Durch Kommas getrennte CSS-Selektoren. ",
				"browserService-ieExcludedLinks-helptext": "Diese Konfiguration wird als Gruppe aus CSS-Selektoren angegeben. Die Konfiguration könnte zum Beispiel wie folgt angegeben werden: " +
															" a[href^='javascript:'] " +
															"to ignore the beforeunload triggered by the following link: < a href='javascript:void(0);'>Click here< /a>" +
															"<br/>HINWEIS: Wenn ein ungültiges Zeichen (z. B. $) angegeben und nicht ordnungsgemäß mit Escapezeichen \\ versehen wird, hat dies in den Browsern Chrome und Webkit eine Ausnahmebedingung zur Folge.",
                "queueService-header": "Konfiguration des Warteschlangendiensts",
                "queueService-subHeader": "Interne Warteschlange der Bibliothek konfigurieren",
                "queueService-queueName": "Name",
                "queueService-queueName-helptext": "In diesem Release wird nur eine Warteschlange unterstützt. Der Name der Warteschlange MUSS 'DEFAULT' lauten. Dieser Wert darf nicht geändert werden. ",
                "queueService-queueEndpoint": "Endpunkt (Zielseite)",
                "queueService-queueEndpoint-helptext": "Die URL der Zielseite auf dem Web-Server, auf dem die erfassten Daten gepostet werden. Domänenübergreifende URLs werden in diesem Release nicht unterstützt. ",
                "queueService-queueSize-events": "Größe (Max. Nachrichten)",
                "queueService-queueSize-events-helptext": "Der Schwellenwert, bei dessen Überschreitung die Warteschlange gelöscht wird. Für Testzwecke werden Werte zwischen 1 und 50 empfohlen, für die Implementierung in der Produktionsumgebung Werte zwischen 20 und 50. ",
                "queueService-queueSize-serialized": "Größe (Max. serialisierte Länge)",
                "queueService-queueSize-serialized-helptext": "Der Schwellenwert für die serialisierte Warteschlangenlänge, bei dessen Überschreitung die Warteschlange gelöscht wird. Für die Implementierung in der Produktionsumgebung werden Werte von 8000 bis 20000 empfohlen." +
                                                    "<br/>HINWEIS: Wenn die gzip-Codierung verwendet wird, sollte der Wert erhöht werden, um die vorab codierte Größenbegrenzung widerzuspiegeln." +
                                                    "<br/>WARNUNG: Die Aktivierung dieser Einstellung kann in einigen Fällen eine Auswirkung auf die Leistung haben, da sie von der Serialisierung der Warteschlange zur Überprüfung des Schwellenwerts abhängt.",
                "queueService-queueSize-serialized-label": " (mit dem Wert 0 wird diese Einstellung inaktiviert)",
                "queueService-queueTimer": "Zeitgeberintervall (Millisekunden)",
                "queueService-queueTimer-label": " Millisekunden (mit dem Wert 0 wird der Zeitgeber inaktiviert).",
                "queueService-queueTimer-helptext": "Zum Aktivieren von Schattenbrowsingszenarios können Sie mit dem Zeitgeberwert festlegen, dass die Warteschlange unabhängig von der Anzahl der Nachrichten gelöscht wird. In den meisten anderen Fällen ist es am besten, diese Einstellung inaktiviert zu belassen. ",

                "queueService-crossDomainEnabled": "Domänenübergreifende POST-Nachrichten aktivieren. ",
                "queueService-crossDomainFrameSelector": "Domänenübergreifender Frameselektor",
                "queueService-crossDomainFrameSelector-helptext": "Ein domänenübergreifender Frameselektor muss das I-Frame- oder Frame-Element auf der Seite angeben, das für POST-Anforderungen konfiguriert wurde. ",

				"queueService-asyncReqOnUnload": "Asynchrone XHR beim Laden von Seiten aktivieren. ",
				"queueService-asyncReqOnUnload-helptext": "Wählen Sie diese Option aus, um asynchrone Anforderungen während des Seitenladens zu aktivieren.<br />WARNUNG: Die Aktivierung asynchroner Anforderungen beim Seitenladen kann unvollständige oder fehlende Daten zur Folge haben. ",

                "queueService-checkEndpoint": "Endpunkt überprüfen",
                "queueService-checkEndpoint-helptext": "Anforderung einer asynchronen Operation senden, um zu überprüfen, ob der Discover-Endpunkt verfügbar ist.",
                "queueService-endpointCheckTimeout": "Zeitlimit für Endpunkt überprüfen",
                "queueService-endpointCheckTimeout-helptext": "Das Zeitlimit für die Anforderung einer asynchronen Operation zur Überprüfung, ob der Discover-Endpunkt verfügbar ist.",

                "queueService-queueSerializer": "Serialisierungsmethode",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "Es wird nur die JSON-Serialisierung unterstützt. ",
                "queueService-addQueue": "Weitere Warteschlange hinzufügen",

                "messageService-header": "Konfiguration des Nachrichtendiensts",
                "messageService-subHeader": "Konfiguration der Datenschutzmaskierung",
                "messageService-targets": "Ziele",
                "messageService-id": "ID",
                "messageService-id-helptext": "HTML-ID, XPath oder benutzerdefinierte Attribut-ID ('attrName=attrValue') des Elements, das maskiert werden soll. ",
                "messageService-idType": "ID-Typ",
                "messageService-idType--1": "HTML-ID",
                "messageService-idType--2": "XPath",
                "messageService-idType--3": "Benutzerdefinierte Attribut-ID",
                "messageService-idType-helptext": "Wählen Sie den korrekten ID-Typ aus. ",
                "messageService-addTarget": "Weiteres Ziel hinzufügen",
                "messageService-maskType": "Maskentyp",
                "messageService-maskType-1": "Leer",
                "messageService-maskType-2": "Basis",
                "messageService-maskType-3": "Typ",
                "messageService-maskType-4": "Benutzerdefiniert",
                "messageService-maskType-helptext": "Der Maskentyp definiert, wie der Wert umgesetzt werden sollte." +
                                                    "<dl>" +
                                                        "<dt><b>Leer:</b></dt>" +
                                                        "<dd>Als Wert wird eine leere Zeichenfolge festgelegt. </dd>" +
                                                        "<dt><b>Basis:</b></dt>" +
                                                        "<dd>Der Wert wird durch folgende feste Zeichenfolge ersetzt: \"XXXXX\".</dd>" +
                                                        "<dt><b>Typ:</b></dt>" +
                                                        "<dd>" +
                                                            "Der Wert wird durch eine Maske ersetzt; hierbei gelten folgende Regeln: " +
                                                            "<ul>" +
                                                                "<li>Kleinbuchstaben werden ersetzt durch: \"x\",</li>" +
                                                                "<li>Großbuchstaben werden ersetzt durch: \"X\",</li>" +
                                                                "<li>Zahlen werden ersetzt durch: \"9\",</li>" +
                                                                "<li>Symbole werden ersetzt durch: \"@\". </li>" +
                                                            "</ul>" +
                                                            "Die Zeichenfolge \"HelloWorld123\" wird somit zu \"XxxxxXxxxx999\". " +
                                                        "</dd>" +
                                                        "<dt><b>Benutzerdefiniert:</b></dt>" +
                                                        "<dd>Der Wert wird durch den Rückgabewert einer benutzerdefinierten Funktion ersetzt, die in die Textbox für Maskenfunktionen (MaskFunction) geschrieben werden muss. </dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "Maskenfunktion",
                "messageService-maskFunction-helptext": "JavaScript-Funktion, die eine nicht maskierte Zeichenfolge annimmt und einen maskierten Wert zurückgibt. ",
                "messageService-addConfiguration": "Datenschutzkonfiguration hinzufügen",
				"messageService-cssSelector": "CSS-Selektor",
				"messageService-cssSelector-helptext": "Einzelne CSS-Selektorzeichenfolge hinzufügen",
				"services-message-privacy-cssSelector-placeholder": "CSS-Selektorzeichenfolge hier hinzufügen",
				"messageService-removePrivacyConfigurationTarget": "Ziel entfernen",
				"messageService-removePrivacyConfiguration": "Datenschutzkonfiguration entfernen",

                "serializer-header": "Konfiguration des Service der Serialisierungsmethode",
                "serializer-defaultToBuiltin": "Integrierten Parser/integrierte Serialisierungsmethode verwenden, falls nicht verfügbar",
                "serializer-defaultToBuiltin-helptext": "UIC wird mit eigener Basisimplementierung eines JSON-Parsers bzw. einer JSON-Serialisierungsmethode bereitgestellt. Die Auswahl des JSON-Parsers bzw. der JSON-Serialisierungsmethode verläuft wie folgt: <br />" +
                                                        "<ol>" +
                                                          "<li>Wenn ein JSON-Parser bzw. eine JSON-Serialisierungsmethode in der nachfolgenden Konfiguration explizit angegeben ist, wird dieser bzw. diese von UIC verwendet. " +
                                                          "<li>Wenn kein JSON-Parser bzw. keine JSON-Serialisierungsmethode in der nachfolgenden Konfiguration explizit angegeben ist, wird von UIC überprüft, ob vom Browser native Unterstützung für JSON bereitgestellt wird. " +
                                                          "<li>Wenn der Browser JSON nicht nativ unterstützt und dieses Kontrollkästchen ausgewählt ist, wird von UIC die eigene JSON-Basisimplementierung verwendet. " +
                                                          "<li>Wenn keine der oben aufgeführten Punkte zutrifft, schlägt UIC automatisch fehl. " +
                                                        "</ol>",
                "serializer-parsers": "Parser",
                "serializer-parsers-helptext": "Die Liste enthält Parserfunktionen, die von UIC verwendet werden sollen (zum Beispiel JSON.parse). Die erste ist die wichtigste. Wenn sie von UIC nicht gefunden wird, wird die nächste versucht (sofern angegeben), usw. ",
                "serializer-parser": "Parser",
                "serializer-addParser": "Weiteren Parser hinzufügen",
                "serializer-stringifiers": "Serialisierungsmethoden",
                "serializer-stringifiers-helptext": "Die Liste enthält Serialisierungsmethodenfunktionen, die von UIC verwendet sollen (zum Beispiel JSON.stringify). Die erste ist die wichtigste. Wenn sie von UIC nicht gefunden wird, wird die nächste versucht (sofern angegeben), usw. ",
                "serializer-stringifier": "Serialisierungsmethode",
                "serializer-addStringifier": "Weitere Serialisierungsmethode hinzufügen",

				"encoder-header": "Konfiguration des Encoder-Service",
				"encoder": "Encoder",
				"encoder-enable": "Aktivieren",
                "encoder-enable-helptext": "Aktivieren Sie diesen Service, um zuzulassen, dass UIC die gzip-Komprimierung auf die Anforderungsdaten anwendet. Beachten Sie, dass der Encoder-Service von der Open Source-Bibliothek 'pako' abhängig ist, die auf der Seite eingeschlossen und initialisiert werden muss, bevor UIC initialisiert wird. Weitere Informationen zu 'pako' einschließlich Downloads finden Sie unter https://github.com/nodeca/pako",
				"encoder-encode": "Codieren",
				"encoder-defaultEncoding": "Standardcodierung",
				"encoder-helptext": "Konfigurieren Sie den Encoder-Service für die Komprimierung. Standardmäßig ist gzip konfiguriert. ",
				"encoder-defaultEncoding-helptext": "Der Codierungstyp wird von UIC im HTTP-Anforderungsheader angegeben. Standardeinstellung ist 'Content-encoding: gzip'. ",
				"encoder-encode-helptext": "Der Pfad zum Encoder. Standardeinstellung ist 'window.pako.gzip'. ",

                "modules-header": "Module",
                "modules-subHeader": "Aktivierte Modul auswählen",
                "modules-performance": "Leistung",
                "modules-performance-helptext": "W3C Navigation Timing-Eigenschaften",
                "modules-PerformanceSettings": "Leistungseinstellungen",
                "modules-replay": "Wiedergeben",
                "modules-replay-helptext": "Überwachung der Benutzerinteraktion zur Aktivierung des Eventings zur Wiedergabe und Benutzerfreundlichkeit sowie des schrittbasierten Eventings. ",
				"modules-usability": "Usability",
				"modules-usability-helptext": "Fügt die Usability-Ereignisse \"mouseout\", \"mousemove\" und \"click\" zur Konfiguration hinzu. ",
                "modules-moduleBaseURL": "Modulbasis-URL: ",
                "modules-moduleBaseURL-helptext": "Position auf dem Server, von der aus Module dynamisch geladen werden können. Diese Option wird im aktuellen Release nicht verwendet. ",
                "modules-replay-events": "Wiedergabeereignisse",
                "modules-hover-tracking": "Kurzinfoüberwachung aktivieren",
                "modules-mobile-events": "Mobile Ereignisse aktivieren",
                "modules-hashchange": "ScreenViews über Hashwertänderung aktivieren",
                "modules-scroll-winsize": "Überwachung des Bildlaufs und der Fenstergröße aktivieren",
				"modules-navigationStart-helptext": "Von diesem Attribut muss die Zeit direkt nach dem Beenden der Aufforderung zum Entladen des vorherigen Dokuments durch den Benutzeragenten zurückgegeben werden. Wenn kein vorheriges Dokument vorhanden ist, muss von diesem Attribut derselbe Wert wie von \"fetchStart\" zurückgegeben werden. ",
				"modules-unloadEventStart-helptext": "Wenn das vorherige Dokument und das aktuelle Dokument denselben Ursprung aufweisen [IETF RFC 6454], muss von diesem Attribut die Zeit direkt vor dem Beginn des UNLOAD-Ereignisses des vorherigen Dokuments zurückgegeben werden. Wenn kein vorheriges Dokument vorhanden ist oder das vorherige Dokument einen anderen Ursprung als das aktuelle aufweist, muss von diesem Attribut der Wert null zurückgegeben werden. ",
				"modules-unloadEventEnd-helptext": "Wenn das vorherige Dokument und das aktuelle Dokument denselben Ursprung aufweisen, muss von diesem Attribut die Zeit direkt nach dem Ende des UNLOAD-Ereignisses des vorherigen Dokuments zurückgegeben werden. Wenn kein vorheriges Dokument vorhanden ist oder das vorherige Dokument einen anderen Ursprung als das aktuelle aufweist oder das Entladen noch nicht abgeschlossen ist, muss von diesem Attribut der Wert null zurückgegeben werden. Wenn HTTP-Umleitungen oder entsprechende Alternativen vorhanden sind und nicht alle Umleitungen oder Alternativen denselben Ursprung aufweisen, muss sowohl von \"unloadEventStart\" als auch von \"unloadEventEnd\" der Wert null zurückgegeben werden. ",
				"modules-redirectStart-helptext": "Wenn HTTP-Umleitungen oder entsprechende Alternativen vorhanden sind und alle Umleitungen oder Alternativen denselben Ursprung aufweisen, muss von diesem Attribut die Startzeit des Abrufs zurückgegeben werden, von dem die Umleitung initiiert wurde. Andernfalls muss von diesem Attribut der Wert null zurückgegeben werden. ",
				"modules-redirectEnd-helptext": "Wenn HTTP-Umleitungen oder entsprechende Alternativen beim Navigieren vorhanden sind und alle Umleitungen oder Alternativen denselben Ursprung aufweisen, muss von diesem Attribut die Zeit direkt nach dem Empfangen des letzten Byte der Antwort der letzten Umleitung zurückgegeben werden. Andernfalls muss von diesem Attribut der Wert null zurückgegeben werden. ",
				"modules-fetchStart-helptext": "Wenn die neue Ressource mithilfe von HTTP GET oder einer entsprechenden Alternativmethode abgerufen wird, muss von \"fetchStart\" die Zeit direkt vor dem Start der Überprüfung der relevanten Anwendungscaches durch den Benutzeragenten zurückgegeben werden. Andernfalls muss die Zeit zurückgegeben werden, zu der die Ressource vom Benutzeragenten abgerufen wurde. ",
				"modules-domainLookupStart-helptext": "Von diesem Attribut muss die Zeit direkt vor dem Beginn der Suche nach dem Domänennamen des aktuellen Dokuments durch den Agenten zurückgegeben werden. Wenn eine persistente Verbindung [RFC 2616] verwendet wird oder das aktuelle Dokument aus den jeweiligen Anwendungscaches oder lokalen Ressourcen abgerufen wird, muss von diesem Attribut derselbe Wert wie von \"fetchStart\" zurückgegeben werden. ",
				"modules-domainLookupEnd-helptext": "Von diesem Attribut muss die Zeit direkt nach dem Ende der Suche nach dem Domänennamen des aktuellen Dokuments durch den Agenten zurückgegeben werden. Wenn eine persistente Verbindung [RFC 2616] verwendet wird oder das aktuelle Dokument aus den jeweiligen Anwendungscaches oder lokalen Ressourcen abgerufen wird, muss von diesem Attribut derselbe Wert wie von \"fetchStart\" zurückgegeben werden. ",
				"modules-connectStart-helptext": "Von diesem Attribut muss die Zeit direkt vor dem Start des Verbindungsaufbaus zum Server zum Abrufen des Dokuments durch den Benutzeragenten zurückgegeben werden. Wenn eine persistente Verbindung [RFC 2616] verwendet wird oder das aktuelle Dokument aus den jeweiligen Anwendungscaches oder lokalen Ressourcen abgerufen wird, muss von diesem Attribut der Wert von \"domainLookupEnd\" zurückgegeben werden. ",
				"modules-connectEnd-helptext": "Von diesem Attribut muss die Zeit direkt nach dem Ende des Verbindungsaufbaus zum Server zum Abrufen des aktuellen Dokuments durch den Benutzeragenten zurückgegeben werden. Wenn eine persistente Verbindung [RFC 2616] verwendet wird oder das aktuelle Dokument aus den jeweiligen Anwendungscaches oder lokalen Ressourcen abgerufen wird, muss von diesem Attribut der Wert von \"domainLookupEnd\" zurückgegeben werden. Wenn die Transportverbindung fehlschlägt und vom Benutzeragenten erneut eine Verbindung geöffnet wird, müssen von \"connectStart\" und \"connectEnd\" die entsprechenden Werte der neuen Verbindung zurückgegeben werden. \"connectEnd\" muss das Zeitintervall zum Erstellen der Transportverbindung sowie weitere Zeitintervalle für SSL-Handshake und SOCKS-Authentifizierung enthalten. ",
				"modules-secureConnectionStart-helptext": "Dieses Attribut ist optional. Benutzeragenten, die nicht über einen Wert für dieses Attribut verfügen, müssen einstellen, dass es nicht definiert ist. Wenn dieses Attribut verfügbar ist und das Schema der aktuellen Seite HTTPS ist, muss von diesem Attribut die Zeit direkt vor dem Start des Handshakevorgangs zur Sicherung der aktuellen Verbindung zurückgegeben werden. Wenn dieses Attribut verfügbar ist, HTTPS jedoch nicht verwendet wird, muss von diesem Attribut der Wert null zurückgegeben werden. ",
				"modules-requestStart-helptext": "Von diesem Attribut muss die Zeit direkt vor dem Start der Anforderung des aktuellen Dokuments vom Server oder aus den entsprechenden Anwendungscaches bzw. lokalen Ressourcen zurückgegeben werden. Wenn die Transportverbindung nach dem Senden einer Anforderung fehlschlägt und vom Benutzeragenten erneut eine Verbindung geöffnet und die Anforderung erneut gesendet wird, müssen von \"requestStart\" die entsprechenden Werte der neuen Anforderung zurückgegeben werden. ",
				"modules-responseStart-helptext": "Von diesem Attribut muss die Zeit direkt nach dem Empfangen des ersten Byte der Antwort vom Server oder von den jeweiligen Anwendungscaches oder lokalen Ressourcen durch den Benutzeragenten zurückgegeben werden. ",
				"modules-responseEnd-helptext": "Von diesem Attribut muss die Zeit direkt nach Empfangen des letzten Byte des aktuellen Dokuments oder direkt vor dem Schließen der Transportverbindung zurückgegeben werden (es gilt der jeweils frühere Zeitpunkt). Das Dokument kann in diesem Fall entweder vom Server, den jeweiligen Anwendungscaches oder lokalen Ressourcen empfangen werden. ",
				"modules-domLoading-helptext": "Von diesem Attribut muss die Zeit direkt vor dem Einstellen der Bereitschaft des aktuellen Dokuments auf 'Laden' durch den Benutzeragenten zurückgegeben werden. ",
				"modules-domInteractive-helptext": "Von diesem Attribut muss die Zeit direkt vor dem Einstellen der Bereitschaft des aktuellen Dokuments auf 'Interaktiv' durch den Benutzeragenten zurückgegeben werden. ",
				"modules-domContentLoadedEventStart-helptext": "Von diesem Attribut muss die Zeit direkt vor dem Auslösen des DOMContentLoaded-Ereignisses für das Dokument durch den Benutzeragenten zurückgegeben werden. ",
				"modules-domContentLoadedEventEnd-helptext": "Von diesem Attribut muss die Zeit direkt nach Abschluss des DOMContentLoaded-Ereignisses des Dokuments zurückgegeben werden. ",
				"modules-domComplete-helptext": "Von diesem Attribut muss die Zeit direkt vor dem Einstellen der Bereitschaft des aktuellen Dokuments auf 'Abgeschlossen' durch den Benutzeragenten zurückgegeben werden. Wenn die Bereitschaft des aktuellen Dokuments mehrfach in denselben Status wechselt, muss von \"domLoading\", \"domInteractive\", \"domContentLoadedEventStart\", \"domContentLoadedEventEnd\" und \"domComplete\" die Zeit des ersten Auftretens der entsprechenden Dokumentbereitschaftsänderung zurückgegeben werden. ",
				"modules-loadEventStart-helptext": "Von diesem Dokument muss die Zeit direkt vor dem Auslösen des Load-Ereignisses des aktuellen Dokuments zurückgegeben werden. Der Wert null muss zurückgegeben werden, wenn das Load-Ereignis noch nicht ausgelöst wurde. ",
				"modules-loadEventEnd-helptext": "Von diesem Dokument muss die Zeit zurückgegeben werden, zu der das Load-Ereignis des aktuellen Dokuments abgeschlossen ist. Der Wert null muss zurückgegeben werden, wenn das Load-Ereignis noch nicht ausgelöst wurde oder noch nicht abgeschlossen ist. ",
				"modules-mobile-events-helptext": "Ermöglicht die Wiedergabe von Ereignissen von mobilen Sitzungen. ",
				"modules-hashchange-helptext": "Wenn diese Option aktiviert ist, werden ScreenView-Ereignisse generiert, sobald eine Hashwertänderung in der URL der Seite festgestellt wird. Ein ScreenView-Ereignis wird in die Sitzungsdaten eingefügt und die von UI Capture erfassten Benutzeroberflächenereignisse können unter der ScreenView organisiert werden, auf der sie aufgetreten sind. ",
				"modules-scroll-winsize-helptext": "HINWEIS: Abhängig von der Anwendung kann durch die Überwachung des Fensterbildlaufs eine erhebliche Anzahl an Ereignissen generiert werden. Die Wiedergabe von Bildlaufereignissen, die vom Client erfasst wurden, wird für mobile Sitzungen nur in BBR unterstützt. ",

                "performance-calculateRenderTime": "Renderzeit für Browser berechnen, die W3C Navigation Timing nicht unterstützen",
                "performance-calculateRenderTime-helptext": "Die Renderzeit wird durch Messung der Zeitdifferenz <br>zwischen dem Laden der Seite und dem Laden der Bibliothek berechnet. ",
                "performance-calculateRenderTime-description": "Wenn diese Einstellung aktiviert ist, wird die Renderzeit von der Bibliothek als Unterschied zwischen ihrer Ladezeit und der Ladezeit der Seite berechnet. Stellen Sie für genaue Messungen sicher, dass die Bibliothek so früh wie möglich im Seitenladezyklus geladen wird. ",
				"performance-renderTimeThreshold": "Renderzeitschwellenwert: ",
				"performance-renderTimeThreshold-helptext": "Die maximale Renderzeit in Millisekunden. Der Standardwert beträgt 10 Minuten <br>(600000 Millisekunden). Jede gemessene Renderzeit, die <br>den Schwellenwert überschreitet, wird als 'invalidRenderTime' gemeldet und nicht <br>in den Leistungsbericht für Renderzeiten aufgenommen. ",

				"replay-customEventName-placeholder": "Einzelnen Ereignisnamen wie zum Beispiel \"mousedown\" eingeben",
				"replay-customEventTarget-placeholder": "Geben Sie einen CSS-Selektor für das Zielelement ein. ",
				"replay-customEvent": "Benutzerdefiniertes Wiedergabeereignis",
				"replay-customEvent-helptext": "CSS-Selektor für stellvertretendes Zielelement ODER Dokument ODER Fenster eingeben",
				"replay-addCustomDelegate": "Benutzerdefiniertes Wiedergabeereignis hinzufügen",
				"replay-customEvent-name": "Ereignisname",
				"replay-customEvent-target": "Ereignisziel",
				"replay-customEvent-name-helptext": "Ereignisnamen wie zum Beispiel \"mousedown\" hier eingeben",
				"replay-customEvent-target-helptext": "CSS-Selektor für Zielelement(e) ODER Dokument ODER Fenster eingeben",
				"replay-customEvent-delegateTarget": "Stellvertretendes Ziel für Ereignis (optional)",
				"replay-customEvent-delegateTarget-helptext": "Geben Sie den CSS-Selektor für das stellvertretende Zielelement ODER Dokument ODER Fenster ein. Diese Einstellung ist optional. ",
				"replay-customEvent-recurseFrames": "Rekursion für Frames durchführen (optional)",
				"replay-customEvent-recurseFrames-helptext": "Wenn diese Einstellung aktiviert ist, wird für das Ereignis ein Listener auf die untergeordneten Frames bzw. I-Frames des Dokuments angewendet. Diese Einstellung ist optional. ",
                "replay-customEvent-state": "Status",
                "replay-customEventState-placeholder": "Eigenschaft zur Verwendung als Status für benutzerdefiniertes Ereignis eingeben",
                "replay-customEvent-state-helptext": "Gibt an, wie der Wert für \"target.currState\" in JSON ausschließlich für benutzerdefinierte Wiedergabeereignisse eingestellt wird. ",
				"replay-removeCustomEvent": "Benutzerdefinierte Wiedergabe entfernen",

				"domCapture-header": "DOM-Erfassung",
				"domCapture-enabled": "DOM-Erfassung aktivieren",
				"domCapture-enabled-helptext": "WARNUNG: Die Aktivierung der DOM-Erfassung hat signifikante Auswirkungen auf Datenübertragung und Infrastruktur. Daher sollte die Aktivierung dieser Funktion wohl überlegt sein. Wenn sie aktiviert wird, sind weitere Konfigurationsschritte erforderlich, damit nur die DOM-Erfassung basierend auf bestimmten Ereignissen und Elementen ausgeführt wird. Weitere Informationen finden Sie in der Dokumentation.",
				"domCapture-captureFrames": "Frames erfassen",
				"domCapture-captureFrames-helptext": "Wenn diese Einstellung aktiviert ist, werden untergeordnete Frames und I-Frames erfasst. HINWEIS: Es können nur die Inhalte erfasst werden, die von derselben Domäne als übergeordneter Seite stammen.",
				"domCapture-removeScripts": "Scripts löschen",
				"domCapture-removeScripts-helptext": "Wenn diese Einstellung aktiviert ist, werden alle Script-Tags aus dem erfassten Snapshot entfernt. ",
                "domCapture-diffEnabled": "DOM-Diffs aktivieren",
                "domCapture-diffEnabled-helptext": "Wenn diese Einstellung aktiviert ist, werden nach der ersten vollständigen DOM-Momentaufnahme DOM-Diffs gesendet. Es wird empfohlen, diese Einstellung zu aktivieren.",
                "domCapture-maxLength": "Maximale Länge",
                "domCapture-maxLength-helptext": "Wenn dieser Schwellenwert überschritten wird, wird der Snapshot nicht gesendet. ",
                "domCapture-maxMutations": "Maximale Veränderungen",
                "domCapture-maxMutations-helptext": "Wenn dieser Schwellenwert erreicht oder überschritten wird, wird statt eines Diff ein vollständiger DOM-Snapshot gemacht. Verwenden Sie diese Einstellung, um die Konfiguration Ihrer DOM-Erfassung zu optimieren und eine Sicherheitsbegrenzung festzulegen, mit der Leistungsengpässe durch die Verarbeitung übermäßiger DOM-Veränderungen verhindert werden.",
				"domCapture-subHeader": "Auslöser für DOM-Erfassung hinzufügen",
				"domCapture-trigger": "Auslöser",
				"domCapture-addTrigger": "Auslöser hinzufügen",
				"domCapture-event": "Ereignis",
				"domCapture-event-helptext": "Die verfügbaren Ereignisse sind \"Laden\", \"Entladen\", \"Klicken\" und \"Ändern\". ",
				"domCapture-screenview": "ScreenView",
				"domCapture-addScreenview": "ScreenView hinzufügen",
				"domCapture-removeScreenview": "ScreenView entfernen",
				"domCapture-delay": "Verzögerung",
				"domCapture-delay-helptext": "Optionale Verzögerung (in Millisekunden), nach der der DOM-Snapshot erstellt werden soll. ",
				"domCapture-delay-placeholder": "Zahl eingeben",
                "domCapture-fullDOMCapture": "Vollständige DOM-Erfassung",
                "domCapture-fullDOMCapture-helptext": "Wenn diese Einstellung aktiviert ist, wird bei diesem Auslöser ein vollständiger DOM-Snapshot gemacht.",
				"domCapture-removeTrigger": "Auslöser entfernen",
				"domCapture-addTarget": "Ziel hinzufügen",
				"domCapture-removeTarget": "Ziel entfernen",
				"domCapture-target": "Ziel",
				"domCapture-target-id": "ID",
				"domCapture-target-id-helptext": "ID des Ziels (einer der drei angegebenen ID-Typen). ",
				"domCapture-target-idType": "ID-Typ",
				"domCapture-target-idType-helptext": "HTML-ID, XPath oder benutzerdefinierte ID des Elements. ",
				"domCapture-target-cssSelector": "CSS-Selektor",
				"domCapture-target-cssSelector-helptext": "Fügen Sie eine einzelne CSS-Selektorzeichenfolge hinzu. ",
                "domCapture-load": "Laden",
                "domCapture-unload": "Entladen",
                "domCapture-click": "Klicken",
                "domCapture-change": "Ändern",
                "domCapture-custom": "Benutzerdefiniert",
                "domCapture-custom-eventName": "Benutzerdefinierter Ereignisname: ",

                "DCCookie-header": "Cookie & Sitzungsmanagement",
                "DCCookie-enabled": "DCCookie-Modul aktivieren",
                "DCCookie-enabled-helptext": "Das DCCookie-Modul ermöglicht die Konfiguration des Anwendungsschlüssel- und Sessionization-Cookies. Diese sind bei der Verwendung des Discover-SaaS-Service erforderlich. Weitere Informationen finden Sie in der Dokumentation zu Discover-SaaS.",
                "DCCookie-dcAppKey": "Anwendungsschlüssel",
                "DCCookie-dcAppKey-helptext": "Geben Sie den Anwendungsschlüssel für Discover-SaaS in dieses Feld ein.",
                "DCCookie-sessionCookie": "Name des Sessionization-Cookies",
                "DCCookie-sessionCookie-helptext": "Geben Sie das Cookie an, das für die Sessionization verwendet wird. Die Angabe von <strong>DCXSID</strong> als Sessionization-Cookie führt dazu, dass UIC das Cookie erstellt, wenn es noch nicht vorhanden ist.",
                
                "geolocation-header": "Geolocation",
                "geolocation-enable": "Geolocation-Protokollierung aktivieren",
                "geolocation-load": "Geolocation während Ladeereignis",
                "geolocation-load-helptext": "Geolocation-Protokollierung während Ladeereignis aktivieren",
                "geolocation-helptext": "Geolocation-Protokollierung meldet Breitengrad, Längengrad und Genauigkeit der Messungen (sofern verfügbar). ",

                "misc-header": "Sonstige Einstellungen",
                "sessionData-options": "Optionen zur gemeinsamen Nutzung von Sitzungsdaten",
                "sessionData-Enable": "Sitzungsdaten gemeinsam nutzen",
                "sessionData-Enable-description": "Wenn diese Option ausgewählt ist, können Sitzungsdaten mit anderen Scripts auf der Seite gemeinsam genutzt werden. Weitere Informationen finden Sie in der Dokumentation. ",
                "sessionData-Enable-helptext": "Wenn diese Option ausgewählt ist, können Sitzungsdaten mit anderen Scripts auf der Seite gemeinsam genutzt werden. Weitere Informationen finden Sie in der Dokumentation. ",
                "sessionId-Cookie": "Cookie",
                "sessionId-Cookie-description": "Wählen Sie diese Option aus, wenn ein Cookie für die Sessionization verwendet wird. ",
                "sessionId-Cookie-helptext": "Wählen Sie diese Option aus, wenn ein Cookie für die Sessionization verwendet wird. ",
                "sessionId-Query": "Abfrageparameter",
                "sessionId-Query-description": "Wählen Sie diese Option aus, wenn ein Abfrageparameter für die Sessionization verwendet wird. ",
                "sessionId-Query-helptext": "Wählen Sie diese Option aus, wenn ein Abfrageparameter für die Sessionization verwendet wird. ",
                "sessionId-Cookie-Name": "Cookiename",
                "sessionId-Cookie-Name-helptext": "Der Name des Cookies, das für die Sessionization verwendet wird. Beispiele: DCXSID, jsessionid, usw. ",
                "sessionId-Query-Name": "Abfrageparametername",
                "sessionId-Query-Name-helptext": "Der Name (zum Beispiel LHS) des Abfrageparameters, der für die Sessionization verwendet wird. ",
                "sessionId-Query-Delimiter": "Abfragezeichenfolgebegrenzer",
                "sessionId-Query-Delimiter-helptext": "Geben Sie den Abfragezeichenfolgebegrenzer an, der von der Anwendung verwendet wird. Der Standardwert ist &. ",
                "sessionId-ValueNeedsHashing": "Hashverfahren für Wert erforderlich",
                "sessionId-ValueNeedsHashingDescription": "Wählen Sie diese Option aus, wenn der Wert zum Ableiten der Sitzungs-ID hashverschlüsselt werden muss. ",
                "misc-frames-blacklist-label": "In Blacklist aufgeführte Frames",
                "misc-frames-blacklist-helptext": "CSS-Selektoren der Frames, die aus der Datenerfassung ausgeschlossene sind. ",
                "misc-frames-blacklist-placeholder": "CSS-Selektoren, getrennt durch Leerzeichen, Komma, Leerzeichen. ",

                "regextester-headline": "Reguläre Ausdrücke testen",
                "regextester-regex": "Regulärer Ausdruck",
                "regextester-flag-i": "Groß-/Kleinschreibung nicht beachten (i)",
                "regextester-flag-g": "Global (g)",
                "regextester-sample": "Teststichprobe",
                "regextester-matches": "Übereinstimmungen? ",
                "regextester-copylabel": "(Bereit für Kopieren&Einfügen in Konfiguration)",
                "regextester-btn-test": "Testen",

                "unsupported-header": "Leider ist Ihr Browser zu alt oder wird nicht unterstützt. ",
                "unsupported-sudHeader": "Verwenden Sie einen der folgenden Browser: ",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "(Version 17.0 und aktueller)",
                "unsupported-safari-versioninfo": "(Version 6.0 und aktueller)",

                "validation-timerinterval": "Zeitgeberintervall ist ungültig. Geben Sie eine Zahl zwischen 1000 und 600000 ein.",
                "validation-maxevents": "Größe (Max. Nachrichten) ist ungültig. Geben Sie eine Zahl zwischen 1 und 100 ein.",
                "validation-renderTimeThreshold": "Der Schwellenwert für die Renderzeit ist ungültig. Geben Sie eine Zahl ein.",
                "validation-maxSize": "Größe (Max. serialisierte Länge) ist ungültig. Geben Sie eine Zahl zwischen 4000 und 1000000 ein.",

                "reload-page": "Laden Sie die Seite erneut, damit die Änderung der Sprache wirksam wird. "
            }

,
            en: // NLS_CHARSET=UTF-8
{
                "site-title": "UIC Configuration Wizard",
                "page-headline": "UIC Configuration Wizard",
				"uic-version": "UIC Version ",
                "advanced-options": "Advanced Options",
                "btn-prev": "Previous",
                "btn-next": "Next",
                "btn-finish": "Finish",
                "btn-reset": "Reset to defaults",
                "btn-regextester": "RegEx Tester",

                "library-type-prod-min": "Production build (minified)",
                "library-type-prod": "Production build (non-minified)",
                "library-type-dev": "Development build (non-minified)",

                "core-inactivityTimeout": "Inactivity Timeout (milliseconds)",
                "core-inactivityTimeout-helptext": "The Inactivity Timeout specifies a timeout value during which, if there is no user activity the UIC will self-terminate. " +
                                                   "The built-in timeout value of 10 minutes is used if no inactivity timeout value is specified. " +
                                                   "<br /><em>Note:</em> Specifying a timeout value of 0 disables this feature. This could lead to orphaned UI hits and is not recommended.",

                "browserService-header": "Browser Service Configuration",
                "browserService-subHeader": "Select a flavor:",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "jQuery flavor is ONLY supported if the web app uses jQuery 1.7 or above.",
                "browserService-jQuery-description": "The jQuery flavor of the UIC library uses jQuery API for cross-browser DOM access.",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "For everyone else.",
                "browserService-w3c-description": "The W3C flavor of the UIC library directly uses browser DOM APIs." +
                                                  "<br /><em>Note:</em> The W3C flavor requires the 3rd party Sizzle JS library to be included as well. Refer to the Sizzle URL section in the advanced options.",

                "browserService-useCapture": "Use capture phase for event listening",
                "browserService-useCapture-helptext": "Enables event capture phase when registering event listeners. If disabled, event bubbling is used which may cause some events to be missed if they are prevented from bubbling. It is recommended to enable this setting." +
                                                      "<br /><em>Note:</em> Older versions of Internet Explorer (IE 8 and below) do not support event capture phase and will automatically revert to using event bubbling." +
                                                      "<br />For additional details about this setting refer to the W3C DOM specification: http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture",
                "browserService-sizzleObject": "Sizzle object",
                "browserService-sizzleObject-helptext": "Path to the Sizzle object. If skipped, window.Sizzle is used by default." +
                                                        "<br /><br /><em>Note:</em> Sizzle is required for the correct operation of the library in older versions of Internet Explorer (IE 8 and below) when using the W3C service." +
                                                        " If the app uses any version of jQuery, there is no need for a separate Sizzle include since jQuery already includes Sizzle." +
                                                        " Sizzle can be obtained from http://sizzlejs.com/",
                "browserService-jQueryObject": "jQuery object",
                "browserService-jQueryObject-helptext": "Path to the jQuery object. If skipped, window.jQuery is used by default.",
                "browserService-blacklistedElements": "Blacklisted elements",
                "browserService-blacklistedElements-placeholder": "IDs or regular expressions separated by space comma space.",
                "browserService-blacklistedElements-helptext": "Blacklist any element IDs that are not unique and/or dynamically generated. Element IDs that match with any of the blacklisted entries will be replaced with custom attribute values or XPATH." +
                                                               "<br /><br />Tip: Use the RegEx tester to validate any regular expressions used to configure the blacklist.",
                "browserService-customID": "Custom attribute ID",
                "browserService-customID-placeholder": "Attribute name.",
                "browserService-customID-helptext": "One or more attribute that can be used to uniquely identify an element when its HTML ID is not available or blacklisted.",
				"browserService-ieExcludedLinks": "Internet Explorer Excluded Links",
				"browserService-ieExcludedLinks-placeholder": "CSS selectors separated by commas.",
				"browserService-ieExcludedLinks-helptext": "This configuration is specified as an array of CSS selectors. For example, the configuration would be specified as: " +
															" a[href^='javascript:'] " +
															"to ignore the beforeunload triggered by the following link: < a href='javascript:void(0);'>Click here< /a>" +
															"<br/>NOTE: If an invalid character (for example $) is specified and it is not properly escaped with \\ then an exception in Chrome and Webkit browsers will result.",
                "queueService-header": "Queue Service Configuration",
                "queueService-subHeader": "Configure the library's internal queue",
                "queueService-queueName": "Name",
                "queueService-queueName-helptext": "Only one queue is supported in this release. The queue name MUST be 'DEFAULT'. Do not change this value.",
                "queueService-queueEndpoint": "Endpoint (Target page)",
                "queueService-queueEndpoint-helptext": "The target page URL on the webserver where the captured data will be posted. Cross-domain URLs are not supported in this release.",
                "queueService-queueSize-events": "Size (Max. Messages)",
                "queueService-queueSize-events-helptext": "The threshold after which the queue will be flushed. Recommended values are between 1-50 for testing and between 20-50 for a production deployment.",
                "queueService-queueSize-serialized": "Size (Max. serialized length)",
                "queueService-queueSize-serialized-helptext": "The serialized queue length threshold after which the queue will be flushed. Recommended values are between 8000-20000 for a production deployment." +
                                                    "<br/>NOTE: If gzip encoding is being used then the value should be increased to reflect the pre-encoded size limit." +
                                                    "<br/>WARNING: Enabling this setting may have a performance impact in some cases since it relies on serializing the queue in order to check the threshold.",
                "queueService-queueSize-serialized-label": " (a value of 0 disables this setting)",
                "queueService-queueTimer": "Timer interval (milliseconds)",
                "queueService-queueTimer-label": " milliseconds (a value of 0 disables the timer).",
                "queueService-queueTimer-helptext": "For enabling shadow browsing scenarios, you can set the timer value to periodically flush the queue irrespective of the number of messages. In most other cases, it's best to leave this setting disabled.",

                "queueService-crossDomainEnabled": "Enable cross-domain POST messages.",
                "queueService-crossDomainFrameSelector": "Cross domain frame selector",
                "queueService-crossDomainFrameSelector-helptext": "The cross domain frame selector should specify the iframe or frame element on the page that has been configured to POST requests.",

				"queueService-asyncReqOnUnload": "Enable asynchronous XHR on page unload.",
				"queueService-asyncReqOnUnload-helptext": "Check this option to enable asynchronous request during page unload.<br />WARNING: Enabling asynchronous request on page unload may result in incomplete or missing data.",

                "queueService-checkEndpoint": "Check Endpoint",
                "queueService-checkEndpoint-helptext": "Send an asynchronous request to check if the Discover endpoint is available.",
                "queueService-endpointCheckTimeout": "Check Endpoint Timeout",
                "queueService-endpointCheckTimeout-helptext": "The timeout for the asynchronous request checking if the Discover endpoint is available.",

                "queueService-queueSerializer": "Serializer",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "Only JSON serialization is supported.",
                "queueService-addQueue": "Add another queue",

                "messageService-header": "Message Service Configuration",
                "messageService-subHeader": "Privacy Masking Configuration",
                "messageService-targets": "Targets",
                "messageService-id": "ID",
                "messageService-id-helptext": "HTML ID, XPath, or Custom Attribute ID ('attrName=attrValue') of the element which should be masked.",
                "messageService-idType": "ID Type",
                "messageService-idType--1": "HTML ID",
                "messageService-idType--2": "xPath",
                "messageService-idType--3": "Custom Attribute ID",
                "messageService-idType-helptext": "Select the correct ID type.",
                "messageService-addTarget": "Add another target",
                "messageService-maskType": "Mask Type",
                "messageService-maskType-1": "Empty",
                "messageService-maskType-2": "Basic",
                "messageService-maskType-3": "Type",
                "messageService-maskType-4": "Custom",
                "messageService-maskType-helptext": "The Mask Type defines how the value should get transformed." +
                                                    "<dl>" +
                                                        "<dt><b>Empty:</b></dt>" +
                                                        "<dd>The value gets set to an empty string.</dd>" +
                                                        "<dt><b>Basic:</b></dt>" +
                                                        "<dd>The value gets replaced with the fixed string: \"XXXXX\".</dd>" +
                                                        "<dt><b>Type:</b></dt>" +
                                                        "<dd>" +
                                                            "The value gets replaced by a mask where each:" +
                                                            "<ul>" +
                                                                "<li>lowercase character gets replaced by: \"x\",</li>" +
                                                                "<li>uppercase character gets replaced by: \"X\",</li>" +
                                                                "<li>number gets replaced by: \"9\",</li>" +
                                                                "<li>symbol gets replaced by: \"@\".</li>" +
                                                            "</ul>" +
                                                            "So the string: \"HelloWorld123\" becomes: \"XxxxxXxxxx999\"" +
                                                        "</dd>" +
                                                        "<dt><b>Custom:</b></dt>" +
                                                        "<dd>The value gets replaced by the return value of a custom function that needs to be written in the MaskFunction textbox.</dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "Mask Function",
                "messageService-maskFunction-helptext": "JavaScript function that accepts an unmasked string and returns the masked value.",
                "messageService-addConfiguration": "Add privacy configuration",
				"messageService-cssSelector": "CSS Selector",
				"messageService-cssSelector-helptext": "Add a single CSS selector string",
				"services-message-privacy-cssSelector-placeholder": "Add CSS selector string here",
				"messageService-removePrivacyConfigurationTarget": "Remove Target",
				"messageService-removePrivacyConfiguration": "Remove Privacy Configuration",

                "serializer-header": "Serializer Service Configuration",
                "serializer-defaultToBuiltin": "Use built-in parser/serializer if none available",
                "serializer-defaultToBuiltin-helptext": "UIC comes with its own basic implementation of a JSON parser/serializer. The choice of the JSON parser/serializer is made as follows:<br />" +
                                                        "<ol>" +
                                                          "<li>If a JSON parser/serializer is explicitly specified in the configuration below, the UIC will use it." +
                                                          "<li>If no JSON parser/serializer is explicitly specified in the configuration below, the UIC will check to see if the browser has native support for JSON." +
                                                          "<li>If the browser does not support JSON natively and this checkbox is selected, the UIC will use it's basic implementation of JSON." +
                                                          "<li>If none of the above are applicable the UIC will fail silently." +
                                                        "</ol>",
                "serializer-parsers": "Parsers",
                "serializer-parsers-helptext": "The list contains parser functions UIC should use (for example, JSON.parse). The first is most important. If UIC does not find it, it will try the next (if specified), and so on.",
                "serializer-parser": "Parser",
                "serializer-addParser": "Add another parser",
                "serializer-stringifiers": "Serializers",
                "serializer-stringifiers-helptext": "The list contains serializer functions UIC should use (for example, JSON.stringify). The first is most important. If UIC does not find it, it will try the next (if specified), and so on.",
                "serializer-stringifier": "Serializer",
                "serializer-addStringifier": "Add another serializer",

				"encoder-header": "Encoder Service Configuration",
				"encoder": "Encoder",
				"encoder-enable": "Enable",
                "encoder-enable-helptext": "Enable this service to allow the UIC to apply gzip compression to the request data. Note that the Encoder service depends on the 'pako' Open Source library to be included and initialized on the page before the UIC is initialized. For more information on 'pako' including downloads see: https://github.com/nodeca/pako",
				"encoder-encode": "Encode",
				"encoder-defaultEncoding": "Default Encoding",
				"encoder-helptext": "Configure the compression encoder service. By default gzip is configured.",
				"encoder-defaultEncoding-helptext": "The encoding type that will be specified by the UIC in the HTTP request header. By default 'Content-encoding: gzip'.",
				"encoder-encode-helptext": "The path to the encoder. By default 'window.pako.gzip'.",

                "modules-header": "Modules",
                "modules-subHeader": "Select enabled modules",
                "modules-performance": "performance",
                "modules-performance-helptext": "W3C Navigation Timing properties",
                "modules-PerformanceSettings": "Performance Settings",
                "modules-replay": "replay",
                "modules-replay-helptext": "User interaction monitoring to enable replay, usability and step-based eventing.",
				"modules-usability": "Usability",
				"modules-usability-helptext": "Adds the mouseout, mousemove, and click usability events to the configuration.",
                "modules-moduleBaseURL": "moduleBase URL:",
                "modules-moduleBaseURL-helptext": "Location on server from which modules that can be loaded dynamically. This option is not used in the current release.",
                "modules-replay-events": "Replay Events",
                "modules-hover-tracking": "Enable hover tracking",
                "modules-mobile-events": "Enable mobile events",
                "modules-hashchange": "Enable screenviews from hashchange",
                "modules-scroll-winsize": "Enable scroll and window size tracking",
				"modules-navigationStart-helptext": "This attribute must return the time immediately after the user agent finishes prompting to unload the previous document. If there is no previous document, this attribute must return the same value as fetchStart.",
				"modules-unloadEventStart-helptext": "If the previous document and the current document have the same origin [IETF RFC 6454], this attribute must return the time immediately before the user agent starts the unload event of the previous document. If there is no previous document or the previous document has a different origin than the current document, this attribute must return zero.",
				"modules-unloadEventEnd-helptext": "If the previous document and the current document have the same same origin, this attribute must return the time immediately after the user agent finishes the unload event of the previous document. If there is no previous document or the previous document has a different origin than the current document or the unload is not yet completed, this attribute must return zero. If there are HTTP redirects or equivalent when navigating and not all the redirects or equivalent are from the same origin, both unloadEventStart and unloadEventEnd must return the zero.",
				"modules-redirectStart-helptext": "If there are HTTP redirects or equivalent when navigating and if all the redirects or equivalent are from the same origin, this attribute must return the starting time of the fetch that initiates the redirect. Otherwise, this attribute must return zero.",
				"modules-redirectEnd-helptext": "If there are HTTP redirects or equivalent when navigating and all redirects and equivalents are from the same origin, this attribute must return the time immediately after receiving the last byte of the response of the last redirect. Otherwise, this attribute must return zero.",
				"modules-fetchStart-helptext": "If the new resource is to be fetched using HTTP GET or equivalent, fetchStart must return the time immediately before the user agent starts checking any relevant application caches. Otherwise, it must return the time when the user agent starts fetching the resource.",
				"modules-domainLookupStart-helptext": "This attribute must return the time immediately before the user agent starts the domain name lookup for the current document. If a persistent connection [RFC 2616] is used or the current document is retrieved from relevant application caches or local resources, this attribute must return the same value as fetchStart.",
				"modules-domainLookupEnd-helptext": "This attribute must return the time immediately after the user agent finishes the domain name lookup for the current document. If a persistent connection [RFC 2616] is used or the current document is retrieved from relevant application caches or local resources, this attribute must return the same value as fetchStart.",
				"modules-connectStart-helptext": "This attribute must return the time immediately before the user agent start establishing the connection to the server to retrieve the document. If a persistent connection [RFC 2616] is used or the current document is retrieved from relevant application caches or local resources, this attribute must return value of domainLookupEnd.",
				"modules-connectEnd-helptext": "This attribute must return the time immediately after the user agent finishes establishing the connection to the server to retrieve the current document. If a persistent connection [RFC 2616] is used or the current document is retrieved from relevant application caches or local resources, this attribute must return the value of domainLookupEnd. If the transport connection fails and the user agent reopens a connection, connectStart and connectEnd should return the corresponding values of the new connection. connectEnd must include the time interval to establish the transport connection as well as other time interval such as SSL handshake and SOCKS authentication.",
				"modules-secureConnectionStart-helptext": "This attribute is optional. User agents that don't have this attribute available must set it as undefined. When this attribute is available, if the scheme of the current page is HTTPS, this attribute must return the time immediately before the user agent starts the handshake process to secure the current connection. If this attribute is available but HTTPS is not used, this attribute must return zero.",
				"modules-requestStart-helptext": "This attribute must return the time immediately before the user agent starts requesting the current document from the server, or from relevant application caches or from local resources. If the transport connection fails after a request is sent and the user agent reopens a connection and resend the request, requestStart should return the corresponding values of the new request.",
				"modules-responseStart-helptext": "This attribute must return the time immediately after the user agent receives the first byte of the response from the server, or from relevant application caches or from local resources.",
				"modules-responseEnd-helptext": "This attribute must return the time immediately after the user agent receives the last byte of the current document or immediately before the transport connection is closed, whichever comes first. The document here can be received either from the server, relevant application caches or from local resources.",
				"modules-domLoading-helptext": "This attribute must return the time immediately before the user agent sets the current document readiness to 'loading'.",
				"modules-domInteractive-helptext": "This attribute must return the time immediately before the user agent sets the current document readiness to 'interactive'.",
				"modules-domContentLoadedEventStart-helptext": "This attribute must return the time immediately before the user agent fires the DOMContentLoaded event at the Document.",
				"modules-domContentLoadedEventEnd-helptext": "This attribute must return the time immediately after the document's DOMContentLoaded event completes.",
				"modules-domComplete-helptext": "This attribute must return the time immediately before the user agent sets the current document readiness to 'complete'. If the current document readiness changes to the same state multiple times, domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd and domComplete must return the time of the first occurrence of the corresponding document readiness change.",
				"modules-loadEventStart-helptext": "This attribute must return the time immediately before the load event of the current document is fired. It must return zero when the load event is not fired yet.",
				"modules-loadEventEnd-helptext": "This attribute must return the time when the load event of the current document is completed. It must return zero when the load event is not fired or is not completed.",
				"modules-mobile-events-helptext": "Enables replay of events from moblie sessions.",
				"modules-hashchange-helptext": "When enabled, this option generates screenview events when a hashchange has been identified in the URL of the page. A screenview event is inserted in the session data, and UI events captured by UI Capture can be organized beneath the screenview on which they occurred.",
				"modules-scroll-winsize-helptext": "NOTE: Depending on your application, tracking window scrolling can generate a significant number of events. Replay of scroll events captured from the client is supported for mobile sessions only in BBR only.",

                "performance-calculateRenderTime": "Calculate render time for browsers that do not support W3C Navigation Timing",
                "performance-calculateRenderTime-helptext": "Render time is calculated by measuring the time difference <br>between page load and library load.",
                "performance-calculateRenderTime-description": "When this setting is enabled, the library will calculate render time as a difference between its load time and the page load time. For accurate measurements, ensure the library is loaded as early as possible in the page load cycle.",
				"performance-renderTimeThreshold": "renderTimeThreshold: ",
				"performance-renderTimeThreshold-helptext": "The maximum render time, in milliseconds. Default is 10 minutes <br>(600000 milliseconds). Any measured render time that exceeds <br>the threshold is reported as 'invalidRenderTime' and is not included <br>in the render time performance reports.",

				"replay-customEventName-placeholder": "Enter a single event name. e.g. mousedown",
				"replay-customEventTarget-placeholder": "Enter a CSS selector for the target element.",
				"replay-customEvent": "Custom Replay Event",
				"replay-customEvent-helptext": "Enter the CSS selector for the delegate target element OR document OR window",
				"replay-addCustomDelegate": "Add a Custom Replay Event",
				"replay-customEvent-name": "Event Name",
				"replay-customEvent-target": "Event Target",
				"replay-customEvent-name-helptext": "Enter the event name here. e.g. mousedown",
				"replay-customEvent-target-helptext": "Enter the CSS selector for the target element(s) OR document OR window",
				"replay-customEvent-delegateTarget": "Event Delegate Target (optional)",
				"replay-customEvent-delegateTarget-helptext": "Enter the CSS selector for the delegate target element OR document OR window. This setting is optional.",
				"replay-customEvent-recurseFrames": "Recurse Frames (optional)",
				"replay-customEvent-recurseFrames-helptext": "If checked, applies a listener for the event to the child frames/iframes of the document. This setting is optional.",
                "replay-customEvent-state": "State",
                "replay-customEventState-placeholder": "Enter property to be used as the state for the custom event",
                "replay-customEvent-state-helptext": "Specifies how the target.currState value is set in the JSON for custom replay events only.",
				"replay-removeCustomEvent": "Remove Custom Replay",

				"domCapture-header": "DOM Capture",
				"domCapture-enabled": "Enable DOM Capture",
				"domCapture-enabled-helptext": "WARNING: Enabling DOM Capture has significant implications on data transmission and infrastructure. Hence this feature should be enabled judiciously. If enabled, it requires further configuration to only perform the DOM Capture based on specific events and elements. Please refer to the documentation for more details.",
				"domCapture-captureFrames": "Capture Frames",
				"domCapture-captureFrames-helptext": "If checked child frames and iframes will be captured. NOTE: Only content sourced from the same domain as the parent page itself can be captured.",
				"domCapture-removeScripts": "Remove Scripts",
				"domCapture-removeScripts-helptext": "If checked all script tags will be removed from the captured snapshot.",
                "domCapture-diffEnabled": "Enable DOM Diffs",
                "domCapture-diffEnabled-helptext": "If checked DOM diffs will be sent after the initial full DOM snapshot. It is recommended to enable this setting.",
                "domCapture-maxLength": "Max Length",
                "domCapture-maxLength-helptext": "If this threshold is exceeded, the snapshot will not be sent.",
                "domCapture-maxMutations": "Max Mutations",
                "domCapture-maxMutations-helptext": "If this threshold is met or exceeded, a full DOM snapshot will be taken instead of a diff. Use this setting to fine tune your DOM Capture configuration and set a safety limit which will prevent performance bottlenecks due to the processing of excessive DOM mutations.",
				"domCapture-subHeader": "Add DOM Capture Triggers",
				"domCapture-trigger": "Trigger",
				"domCapture-addTrigger": "Add Trigger",
				"domCapture-event": "Event",
				"domCapture-event-helptext": "The available events are load, unload, click, or change.",
				"domCapture-screenview": "Screenview",
				"domCapture-addScreenview": "Add Screenview",
				"domCapture-removeScreenview": "Remove Screenview",
				"domCapture-delay": "Delay",
				"domCapture-delay-helptext": "Optional delay (in milliseconds) after which the DOM snapshot should be taken.",
				"domCapture-delay-placeholder": "Enter a number",
                "domCapture-fullDOMCapture": "Full DOM Capture",
                "domCapture-fullDOMCapture-helptext": "If checked a full DOM snapshot will be taken for this trigger.",
				"domCapture-removeTrigger": "Remove Trigger",
				"domCapture-addTarget": "Add Target",
				"domCapture-removeTarget": "Remove Target",
				"domCapture-target": "Target",
				"domCapture-target-id": "ID",
				"domCapture-target-id-helptext": "ID of the target as the specified of the three ID types.",
				"domCapture-target-idType": "ID Type",
				"domCapture-target-idType-helptext": "HTML ID, XPath, or Custom ID of the element.",
				"domCapture-target-cssSelector": "CSS Selector",
				"domCapture-target-cssSelector-helptext": "Add a single CSS selector string.",
                "domCapture-load": "load",
                "domCapture-unload": "unload",
                "domCapture-click": "click",
                "domCapture-change": "change",
                "domCapture-custom": "custom",
                "domCapture-custom-eventName": "Custom Event Name:",

                "DCCookie-header": "Cookie & Session Management",
                "DCCookie-enabled": "Enable DCCookie module",
                "DCCookie-enabled-helptext": "The DCCookie module allows configuration of the Application Key and the Sessionization cookie. These are required when using the Discover SaaS service. For additional information please consult the Discover SaaS documentation.",
                "DCCookie-dcAppKey": "Application Key",
                "DCCookie-dcAppKey-helptext": "Enter the Discover SaaS Application Key in this field.",
                "DCCookie-sessionCookie": "Sessionization Cookie Name",
                "DCCookie-sessionCookie-helptext": "Specify the cookie being used for sessionization. Specifying <strong>DCXSID</strong> as the sessionization cookie will cause the UIC to create the cookie if it does not already exist.",
                
                "geolocation-header": "Geolocation",
                "geolocation-enable": "Enable Geolocation Logging",
                "geolocation-load": "Geolocation during Load Event",
                "geolocation-load-helptext": "Will enable geolocation logging during the load event",
                "geolocation-helptext": "Geolocation logging reports the latitude, longitude, and accuracy of the measurements if available.",

                "misc-header": "Miscellaneous Settings",
                "sessionData-options": "Session Data sharing options",
                "sessionData-Enable": "Share session data",
                "sessionData-Enable-description": "Selecting this option will enable sharing of session data with other scripts on the page. Please refer to the documentation for details.",
                "sessionData-Enable-helptext": "Selecting this option will enable sharing of session data with other scripts on the page. Please refer to the documentation for details.",
                "sessionId-Cookie": "Cookie",
                "sessionId-Cookie-description": "Select this option if a cookie is used for sessionization.",
                "sessionId-Cookie-helptext": "Select this option if a cookie is used for sessionization.",
                "sessionId-Query": "Query Parameter",
                "sessionId-Query-description": "Select this option if a query parameter is used for sessionization.",
                "sessionId-Query-helptext": "Select this option if a query parameter is used for sessionization.",
                "sessionId-Cookie-Name": "Cookie Name",
                "sessionId-Cookie-Name-helptext": "The name of the cookie being used for sessionization. For example, DCXSID, jsessionid, and so on.",
                "sessionId-Query-Name": "Query Parameter Name",
                "sessionId-Query-Name-helptext": "The name (i.e. LHS) of the query parameter being used for sessionization.",
                "sessionId-Query-Delimiter": "Query string delimiter",
                "sessionId-Query-Delimiter-helptext": "Specify the query string delimiter that is being used by the application. Default is &",
                "sessionId-ValueNeedsHashing": "Value needs hashing",
                "sessionId-ValueNeedsHashingDescription": "Select this option if the value needs to be hashed to derive the Session ID.",
                "misc-frames-blacklist-label": "Blacklisted frames",
                "misc-frames-blacklist-helptext": "CSS selectors of frames excluded from data collection.",
                "misc-frames-blacklist-placeholder": "CSS selectors separated by space comma space.",

                "regextester-headline": "Test your regular expressions",
                "regextester-regex": "RegEx",
                "regextester-flag-i": "Case insensitive (i)",
                "regextester-flag-g": "Global (g)",
                "regextester-sample": "Test Sample",
                "regextester-matches": "Matches?",
                "regextester-copylabel": "(ready for copy&paste into config)",
                "regextester-btn-test": "Test",

                "unsupported-header": "Unfortunately your browser is either too old or not supported.",
                "unsupported-sudHeader": "Please use one of the following browsers:",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "(Version 17.0 and above)",
                "unsupported-safari-versioninfo": "(Version 6.0 and above)",

                "validation-timerinterval": "Timer interval is not valid. Please input a number between 1000 and 600000.",
                "validation-maxevents": "Size (Max. messages) is not valid. Please input a number between 1 and 100.",
                "validation-renderTimeThreshold": "The render time threshold is not valid, please input a number.",
                "validation-maxSize": "Size (Max. serialized length) is not valid. Please input a number between 4000 and 1000000.",

                "reload-page": "Please reload the page for the language change to take effect."
            },
            es: // NLS_CHARSET=UTF-8
{
                "site-title": "Asistente de configuración de UIC",
                "page-headline": "Asistente de configuración de UIC",
				"uic-version": "Versión de UIC ",
                "advanced-options": "Opciones avanzadas",
                "btn-prev": "Anterior",
                "btn-next": "Siguiente",
                "btn-finish": "Finalizar",
                "btn-reset": "Restablecer a valores predeterminados",
                "btn-regextester": "Probador de expresiones regulares",

                "library-type-prod-min": "Compilación de producción (minificada)",
                "library-type-prod": "Compilación de producción (no minificada)",
                "library-type-dev": "Compilación de desarrollo (no minificada)",

                "core-inactivityTimeout": "Tiempo de espera de inactividad (milisegundos)",
                "core-inactivityTimeout-helptext": "El tiempo de espera de inactividad especifica un periodo de tiempo durante el que no hay ninguna actividad del usuario y UIC finaliza de forma automática. " +
                                                   "El valor de tiempo de espera predeterminado de 10 minutos se utiliza si no se especifica un valor de tiempo de espera de inactividad. " +
                                                   "<br /><em>Nota:</em> Si se especifica un tiempo de espera de 0, se inhabilita esta función. Esto puede provocar que existan hits de IU huérfanos, por lo que se recomienda.",

                "browserService-header": "Configuración del servicio de navegador",
                "browserService-subHeader": "Seleccione un tipo:",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "El tipo jQuery se admite SOLO si la aplicación web utiliza jQuery 1.7 o superior.",
                "browserService-jQuery-description": "El tipo jQuery de la biblioteca UIC utiliza la API jQuery para el acceso DOM entre navegadores.",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "Para todos los demás.",
                "browserService-w3c-description": "El tipo W3C de la biblioteca UIC utiliza directamente las API DOM de navegador." +
                                                  "<br /><em>Nota:</em> el tipo W3C requiere que se incluya la biblioteca Sizzle JS de terceros también. Consulte la sección URL de Sizzle en las opciones avanzadas.",

                "browserService-useCapture": "Utilizar fase de captura para escucha de eventos",
                "browserService-useCapture-helptext": "Permite la fase de captura de eventos durante el registro de escuchas de eventos. Si se inhabilita, se utiliza el desencadenamiento de eventos, lo cual puede provocar que falten algunos eventos si se impide su desencadenamiento. Se recomienda habilitar esta opción." +
                                                      "<br /><em>Nota:</em> Las versiones anteriores de Internet Explorer (IE 8 y anteriores) no soportan la fase de captura de eventos y automáticamente revierten al desencadenamiento de eventos." +
                                                      "<br />Para obtener detalles acerca de este valor, consulte la especificación W3C DOM: http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture",
                "browserService-sizzleObject": "Objeto Sizzle",
                "browserService-sizzleObject-helptext": "Vía de acceso al objeto Sizzle. Si se omite, se utiliza window.Sizzle de forma predeterminada." +
                                                        "<br /><br /><em>Nota:</em> Sizzle es necesario para que la biblioteca funcione correctamente en versiones anteriores de Internet Explorer (IE 8 y anteriores) cuando se utiliza el servicio W3C." +
                                                        " Si la aplicación utiliza cualquier versión de jQuery, no se necesita una inclusión de Sizzle aparte puesto que jQuery ya incluye Sizzle." +
                                                        " Sizzle se puede obtener en http://sizzlejs.com/",
                "browserService-jQueryObject": "Objeto jQuery",
                "browserService-jQueryObject-helptext": "Vía de acceso al objeto jQuery. Si se omite, se utiliza window.jQuery de forma predeterminada.",
                "browserService-blacklistedElements": "Elementos en la lista negra",
                "browserService-blacklistedElements-placeholder": "ID o expresiones regulares separados por espacio coma espacio.",
                "browserService-blacklistedElements-helptext": "Incluya en lista negra los ID de elementos que no sean únicos y/o generados dinámicamente. Los ID de elemento que coinciden con cualquiera de las entradas de lista negra se sustituirán por los valores de atributo personalizado o XPATH." +
                                                               "<br /><br />Sugerencia: utilice el probador de expresión regular para validar las expresiones regulares utilizadas para configurar la lista negra.",
                "browserService-customID": "ID de atributo personalizado",
                "browserService-customID-placeholder": "Nombre del atributo.",
                "browserService-customID-helptext": "Se pueden utilizar uno o varios atributos para identificar de forma exclusiva un elemento cuando su ID HTML no está disponible o no está incluido en lista negra.",
				"browserService-ieExcludedLinks": "Enlaces excluidos de Internet Explorer",
				"browserService-ieExcludedLinks-placeholder": "Selectores CSS separados por comas.",
				"browserService-ieExcludedLinks-helptext": "Esta configuración se especifica como una matriz de selectores CSS. Por ejemplo, la configuración se especificaría como: " +
															" a[href^='javascript:'] " +
															"para ignorar beforeunload desencadenado por el enlace siguiente: < a href='javascript:void(0);'>Haga clic aquí< /a>" +
															"<br/>NOTA: Si se especifica un carácter no válido (por ejemplo $) y no va precedido correctamente de caracteres de escape con \\ dará como resultado una excepción en los navegadores Chrome y Webkit.",
                "queueService-header": "Configuración del servicio de cola",
                "queueService-subHeader": "Configurar la cola interna de la biblioteca",
                "queueService-queueName": "Nombre",
                "queueService-queueName-helptext": "Solo se admite una cola en este release. El nombre de cola DEBE ser 'DEFAULT'. No modifique este valor.",
                "queueService-queueEndpoint": "Punto final (página de destino)",
                "queueService-queueEndpoint-helptext": "El URL de página de destino en el servidor web donde se enviarán los datos capturados. No se admiten URL entre dominios en este release.",
                "queueService-queueSize-events": "Tamaño (máx. mensajes)",
                "queueService-queueSize-events-helptext": "El umbral después del cual se vaciará la cola. Los valores recomendados están entre 1 y 50 para prueba y entre 20 y 50 para despliegue de producción.",
                "queueService-queueSize-serialized": "Tamaño (máx. longitud serializada)",
                "queueService-queueSize-serialized-helptext": "El umbral de longitud de cola serializada después del cual se vaciará la cola. Los valores recomendados están entre 8000 y 20000 para despliegue de producción." +
                                                    "<br/>NOTA: Si se utiliza la codificación gzip, entonces el valor se debe aumentar para reflejar el límite de tamaño precodificado." +
                                                    "<br/>AVISO: Si se habilita este valor es posible que el rendimiento se vea afectado en algunos casos porque depende de la serialización de la cola para comprobar el umbral.",
                "queueService-queueSize-serialized-label": " (un valor de 0 inhabilita este ajuste)",
                "queueService-queueTimer": "Intervalo de temporizador (milisegundos)",
                "queueService-queueTimer-label": " milisegundos (un valor de 0 inhabilita este ajuste)",
                "queueService-queueTimer-helptext": "Para habilitar los escenarios de exploración duplicados, puede establecer el valor del temporizador para que vacíe periódicamente la cola independientemente del número de mensajes. En la mayoría de los otros casos, es mejor dejar esta opción inhabilitada.",

                "queueService-crossDomainEnabled": "Habilitar mensajes POST entre dominios.",
                "queueService-crossDomainFrameSelector": "Selector de trama entre dominios",
                "queueService-crossDomainFrameSelector-helptext": "El selector de trama entre dominios debe especificar la trama de información o el elemento de trama en la página que se ha configurado para las solicitudes POST.",

				"queueService-asyncReqOnUnload": "Habilitar XHR asíncrono en la descarga de página.",
				"queueService-asyncReqOnUnload-helptext": "Marque esta opción para habilitar la solicitud asíncrona durante la descarga de página.<br />AVISO: si se habilita la solicitud asíncrona en la descarga de página puede dar como resultado que falten datos o estén incompletos.",

                "queueService-checkEndpoint": "Comprobar punto final",
                "queueService-checkEndpoint-helptext": "Enviar una solicitud asíncrona para comprobar si el punto final Discover está disponible.",
                "queueService-endpointCheckTimeout": "Comprobar tiempo de espera de punto final",
                "queueService-endpointCheckTimeout-helptext": "El tiempo de espera para que la solicitud asíncrona compruebe si el punto final Discover está disponible.",

                "queueService-queueSerializer": "Serializador",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "Solo se admite la serialización JSON.",
                "queueService-addQueue": "Añadir otra cola",

                "messageService-header": "Configuración del servicio de mensajería",
                "messageService-subHeader": "Configuración de máscara de privacidad",
                "messageService-targets": "Destinos",
                "messageService-id": "ID",
                "messageService-id-helptext": "ID HTML, XPath o ID de atributo personalizdo ('attrName=attrValue') del elemento que se debe enmascarar.",
                "messageService-idType": "Tipo de ID",
                "messageService-idType--1": "ID HTML",
                "messageService-idType--2": "xPath",
                "messageService-idType--3": "ID de atributo personalizado",
                "messageService-idType-helptext": "Seleccione el tipo de ID correcto.",
                "messageService-addTarget": "Añadir otro destino",
                "messageService-maskType": "Tipo de máscara",
                "messageService-maskType-1": "Vacío",
                "messageService-maskType-2": "Básico",
                "messageService-maskType-3": "Tipo",
                "messageService-maskType-4": "Personalizado",
                "messageService-maskType-helptext": "El tipo de máscara define cómo se debe transformar el valor." +
                                                    "<dl>" +
                                                        "<dt><b>Vacío:</b></dt>" +
                                                        "<dd>El valor se establece en una serie vacía.</dd>" +
                                                        "<dt><b>Básico:</b></dt>" +
                                                        "<dd>El valor se sustituye por la serie fija: \"XXXXX\".</dd>" +
                                                        "<dt><b>Tipo:</b></dt>" +
                                                        "<dd>" +
                                                            "El valor se sustituye por una máscara donde todos los:" +
                                                            "<ul>" +
                                                                "<li>caracteres en minúscula se sustituyen por: \"x\",</li>" +
                                                                "<li>caracteres en mayúscula se sustituyen por: \"X\",</li>" +
                                                                "<li>números se sustituyen por: \"9\",</li>" +
                                                                "<li>símbolos se sustituyen por: \"@\".</li>" +
                                                            "</ul>" +
                                                            "De modo que la serie: \"HelloWorld123\" se convierte en: \"XxxxxXxxxx999\"" +
                                                        "</dd>" +
                                                        "<dt><b>Personalizado:</b></dt>" +
                                                        "<dd>El valor se sustituye por el valor de retorno de una función personalizada que se debe grabar en el recuadro de texto MaskFunction.</dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "Función máscara",
                "messageService-maskFunction-helptext": "Función de JavaScript que acepta una serie sin enmascarar y devuelve el valor enmascarado.",
                "messageService-addConfiguration": "Añadir configuración de privacidad",
				"messageService-cssSelector": "Selector CSS",
				"messageService-cssSelector-helptext": "Añadir una serie de selector CSS única",
				"services-message-privacy-cssSelector-placeholder": "Añadir una serie de selector CSS aquí",
				"messageService-removePrivacyConfigurationTarget": "Eliminar destino",
				"messageService-removePrivacyConfiguration": "Eliminar configuración de privacidad",

                "serializer-header": "Configuración del servicio de serializador",
                "serializer-defaultToBuiltin": "Utilizar analizador o serializador incorporado si no hay ninguno disponible",
                "serializer-defaultToBuiltin-helptext": "UIC viene con su propia implementación básica de un analizador o serializador JSON. La elección del analizador o serializador JSON se realiza de la manera siguiente:<br />" +
                                                        "<ol>" +
                                                          "<li>Si se especifica de forma explícita un analizador o serializador JSON en la configuración siguiente, UIC lo utilizará." +
                                                          "<li>Si no se especifica de forma explícita un analizador o serializador JSON en la configuración siguiente, UIC comprobará si el navegador tiene soporte nativo de JSON." +
                                                          "<li>Si el navegador no admite JSON de forma nativa y está seleccionado este recuadro de selección, UIC utilizará su implementación básica de JSON." +
                                                          "<li>Si ninguna de las opciones anteriores es aplicable, UIC fallará de forma silenciosa." +
                                                        "</ol>",
                "serializer-parsers": "Analizadores",
                "serializer-parsers-helptext": "La lista contiene funciones de analizador que UIC debe utilizar (por ejemplo, JSON.parse). La primera es la más importante. Si UIC no la encuentra, intentará la próxima (si se ha especificado), etc.",
                "serializer-parser": "Analizador",
                "serializer-addParser": "Añadir otro analizador",
                "serializer-stringifiers": "Serializadores",
                "serializer-stringifiers-helptext": "La lista contiene funciones de serializador que UIC debe utilizar (por ejemplo, JSON.stringify). La primera es la más importante. Si UIC no la encuentra, intentará la próxima (si se ha especificado), etc.",
                "serializer-stringifier": "Serializador",
                "serializer-addStringifier": "Añadir otro serializador",

				"encoder-header": "Configuración del servicio de codificador",
				"encoder": "Codificador",
				"encoder-enable": "Habilitar",
                "encoder-enable-helptext": "Habilite este servicio para permitir que UIC aplique la compresión gzip a los datos de la solicitud. Tenga en cuenta que el servicio de codificador depende de que la biblioteca de código abierto 'pako' se incluya y se inicie en la página antes de que empiece UIC. Para obtener más información sobre 'pako', incluidas las descargas, consulte: https://github.com/nodeca/pako",
				"encoder-encode": "Codificar",
				"encoder-defaultEncoding": "Codificación predeterminada",
				"encoder-helptext": "Configurar el servicio codificador de compresión. De forma predeterminada está configurado gzip.",
				"encoder-defaultEncoding-helptext": "El tipo de codificación que UIC especificará en la cabecera de solicitud HTTP. De forma predeterminada 'Content-encoding: gzip'.",
				"encoder-encode-helptext": "La vía de acceso del codificador. De forma predeterminada 'window.pako.gzip'.",

                "modules-header": "Módulos",
                "modules-subHeader": "Seleccionar módulos habilitados",
                "modules-performance": "performance",
                "modules-performance-helptext": "Propiedades de Navigation Timing de W3C",
                "modules-PerformanceSettings": "Valores de rendimiento",
                "modules-replay": "replay",
                "modules-replay-helptext": "Supervisión de interacción del usuario para habilitar la reproducción, la usabilidad y los eventos basados en pasos.",
				"modules-usability": "Usability",
				"modules-usability-helptext": "Añade los eventos de usability mouseout, mousemove y click a la configuración.",
                "modules-moduleBaseURL": "URL de moduleBase:",
                "modules-moduleBaseURL-helptext": "Ubicación en el servidor desde el que se pueden cargar dinámicamente los módulos. Esta opción no se utiliza en el release actual.",
                "modules-replay-events": "Eventos de reproducción",
                "modules-hover-tracking": "Habilitar seguimiento contextual",
                "modules-mobile-events": "Habilitar eventos de móviles",
                "modules-hashchange": "Habilitar vistas de pantalla de hashchange",
                "modules-scroll-winsize": "Habilitar seguimiento de desplazamiento y tamaño de ventana",
				"modules-navigationStart-helptext": "Este atributo debe devolver la hora inmediatamente después de que el agente de usuario termine de solicitar la descarga del documento anterior. Si no hay ningún documento anterior, este atributo debe devolver el mismo valor que fetchStart.",
				"modules-unloadEventStart-helptext": "Si el documento anterior y el documento actual tienen el mismo origen [IETF RFC 6454], este atributo debe devolver la hora inmediatamente antes de que el agente de usuario inicie el evento de descarga del documento anterior. Si no hay ningún documento anterior o el documento anterior tiene un origen distinto del documento actual, este atributo debe devolver cero.",
				"modules-unloadEventEnd-helptext": "Si el documento anterior y el documento actual tienen el mismo origen, este atributo debe devolver el tiempo inmediatamente después de que el agente de usuario finalice el evento de descarga del documento anterior. Si no hay ningún documento anterior o el documento anterior tiene un origen distinto del documento actual o no se ha completado todavía la descarga, este atributo debe devolver cero. Si hay redirecciones HTTP o equivalentes al navegar y no todas las redirecciones HTTP o equivalentes son del mismo origen, unloadEventStart y unloadEventEnd deben devolver cero.",
				"modules-redirectStart-helptext": "Si hay redirecciones HTTP o equivalentes al navegar y si todas las redirecciones o equivalentes son del mismo origen, este atributo debe devolver la hora de inicio de la captura que inicia la redirección. De lo contrario, este atributo debe devolver cero.",
				"modules-redirectEnd-helptext": "Si hay redirecciones HTTP o equivalentes al navegar y todas las redirecciones o equivalentes son del mismo origen, este atributo debe devolver la hora inmediatamente después de recibir el último byte de la respuesta de la última redirección. De lo contrario, este atributo debe devolver cero.",
				"modules-fetchStart-helptext": "Si el nuevo recurso se va a capturar mediante HTTP GET o equivalente, fetchStart debe devolver la hora inmediatamente antes de que el agente de usuario comience a comprobar las memorias caché de aplicaciones relevantes. De lo contrario, debe devolver la hora en que el agente de usuario comienza a captar el recurso.",
				"modules-domainLookupStart-helptext": "Este atributo debe devolver la hora inmediatamente antes de que el agente de usuario inicie la búsqueda del nombre de dominio para el documento actual. Si se utiliza una conexión persistente [RFC 2616] o el documento actual se recupera de memorias cachés de aplicaciones relevantes o recursos locales, este atributo debe devolver el mismo valor que fetchStart.",
				"modules-domainLookupEnd-helptext": "Este atributo debe devolver la hora inmediatamente después de que el agente de usuario termine la búsqueda del nombre de dominio para el documento actual. Si se utiliza una conexión persistente [RFC 2616] o el documento actual se recupera de memorias cachés de aplicaciones relevantes o recursos locales, este atributo debe devolver el mismo valor que fetchStart.",
				"modules-connectStart-helptext": "Este atributo debe devolver la hora inmediatamente antes de que el agente de usuario empiece a establecer la conexión al servidor para recuperar el documento. Si se utiliza una conexión persistente [RFC 2616] o el documento actual se recupera de memorias cachés de aplicaciones relevantes o recursos locales, este atributo debe devolver el valor de domainLookupEnd.",
				"modules-connectEnd-helptext": "Este atributo debe devolver la hora inmediatamente después de que el agente de usuario termine de establecer la conexión al servidor para recuperar el documento actual. Si se utiliza una conexión persistente [RFC 2616] o el documento actual se recupera de memorias cachés de aplicaciones relevantes o recursos locales, este atributo debe devolver el valor de domainLookupEnd. Si la conexión de transporte falla y el agente de usuario reabre una conexión, connectStart y connectEnd deben devolver los valores correspondientes de la nueva conexión. connectEnd debe incluir el intervalo de tiempo para establecer la conexión de transporte así como otro intervalo de tiempo como reconocimiento SSL y autenticación SOCKS.",
				"modules-secureConnectionStart-helptext": "Este atributo es opcional. Los agentes de usuario que no tienen este atributo disponible deben establecerlo como no definido. Cuando está disponible este atributo, si el esquema de la página actual es HTTPS, este atributo debe devolver la hora inmediatamente antes de que el agente de usuario inicie el proceso de reconocimiento para proteger la conexión actual. Si está disponible este atributo pero no se utiliza HTTPS, este atributo debe devolver cero.",
				"modules-requestStart-helptext": "Este atributo debe devolver la hora inmediatamente antes de que el agente de usuario comience a solicitar el documento actual del servidor, o de las memorias caché de aplicaciones relevantes o de los recursos locales. Si la conexión de transporte falla después de una solicitud y el agente de usuario reabre una conexión y reenvía la solicitud, requestStart debe devolver los valores correspondientes de la nueva solicitud.",
				"modules-responseStart-helptext": "Este atributo debe devolver la hora inmediatamente antes de que el agente de usuario reciba el primer byte de la respuesta del servidor, o de las memorias caché de aplicación relevantes o de los recursos locales",
				"modules-responseEnd-helptext": "Este atributo debe devolver la hora inmediatamente después de que el agente de usuario reciba el último byte del documento actual o inmediatamente antes de que se cierre la conexión de transporte, la acción que se produzca primero. El documento aquí se puede recibir del servidor, de las memorias caché de aplicaciones relevantes o de los recursos locales.",
				"modules-domLoading-helptext": "Este atributo debe devolver la hora inmediatamente antes de que el agente de usuario establezca la preparación del documento actual en 'cargando'.",
				"modules-domInteractive-helptext": "Este atributo debe devolver la hora inmediatamente antes de que el agente de usuario establezca la preparación del documento actual en 'interactiva'.",
				"modules-domContentLoadedEventStart-helptext": "Este atributo debe devolver la hora inmediatamente antes de que el agente de usuario active el evento DOMContentLoaded en el documento.",
				"modules-domContentLoadedEventEnd-helptext": "Este atributo debe devolver la hora inmediatamente después de que se complete el evento DOMContentLoaded del documento.",
				"modules-domComplete-helptext": "Este atributo debe devolver la hora inmediatamente antes de que el agente de usuario establezca la preparación del documento actual en 'completa'. Si la preparación del documento actual cambia al mismo estado varias veces, domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd y domComplete deben devolver la hora de la primera aparición del cambio de la preparación del documento correspondiente.",
				"modules-loadEventStart-helptext": "Este atributo debe devolver la hora inmediatamente antes de que se active el evento de carga del documento actual. Debe devolver cero cuando el evento de carga no se haya activado todavía.",
				"modules-loadEventEnd-helptext": "Este atributo debe devolver la hora en que se complete el evento de carga del documento actual. Debe devolver cero cuando el evento de carga no se haya activado o no se haya completado.",
				"modules-mobile-events-helptext": "Habilita la reproducción de eventos de sesiones móviles.",
				"modules-hashchange-helptext": "Cuando está habilitada, esta opción genera eventos de vista de pantalla cuando se ha identificado un cambio hash en el URL de la página. Un evento de vista de pantalla se inserta en los datos de sesión y los eventos de IU capturados por UI Capture se pueden organizar bajo la vista de pantalla en la que se producen.",
				"modules-scroll-winsize-helptext": "NOTA: en función de la aplicación, el desplazamiento de la ventana de seguimiento puede generar un número significativo de eventos. Se admite la reproducción de los eventos de desplazamiento capturados del cliente para las sesiones móviles solo en BBR.",

                "performance-calculateRenderTime": "Calcular tiempo de representación de los navegadores que no admiten Navigation Timing de W3C",
                "performance-calculateRenderTime-helptext": "El tiempo de representación se calcula midiendo la diferencia de tiempo <br>entre la carga de página y la carga de biblioteca.",
                "performance-calculateRenderTime-description": "Cuando está habilitado este valor, la biblioteca calculará el tiempo de representación como una diferencia entre su tiempo de carga y el tiempo de carga de página. Para obtener mediciones precisas, asegúrese de que la biblioteca se cargue lo antes posible en el ciclo de carga de página.",
				"performance-renderTimeThreshold": "renderTimeThreshold: ",
				"performance-renderTimeThreshold-helptext": "El tiempo máximo de representación, en milisegundos. El valor predeterminado es 10 minutos <br>(600000 milisegundos). Cualquier tiempo de representación medido que supere <br>el umbral se notifica como 'invalidRenderTime' y no se incluye <br>en los informes de rendimiento de tiempo de representación.",

				"replay-customEventName-placeholder": "Especifique un nombre de evento único, por ejemplo, mousedown",
				"replay-customEventTarget-placeholder": "Especifique un selector CSS para el elemento de destino.",
				"replay-customEvent": "Evento de reproducción personalizado",
				"replay-customEvent-helptext": "Especifique el selector CSS para el elemento de destino delegado, o documento o ventana",
				"replay-addCustomDelegate": "Añadir un evento de reproducción personalizado",
				"replay-customEvent-name": "Nombre de evento",
				"replay-customEvent-target": "Destino de evento",
				"replay-customEvent-name-helptext": "Especifique el nombre de evento aquí, por ejemplo, mousedown",
				"replay-customEvent-target-helptext": "Especifique el selector CSS para los elementos de destino, o documento o ventana",
				"replay-customEvent-delegateTarget": "Destino de delegado de evento (opcional)",
				"replay-customEvent-delegateTarget-helptext": "Especifique el selector CSS para el elemento de destino delegado, o documento o ventana. Este valor es opcional.",
				"replay-customEvent-recurseFrames": "Tramas de recurso (opcional)",
				"replay-customEvent-recurseFrames-helptext": "Si está seleccionado, aplica un escucha para el evento a la trama o tramas de información hijo del documento. Este valor es opcional.",
                "replay-customEvent-state": "Estado",
                "replay-customEventState-placeholder": "Especifique la propiedad que se va a utilizar como el estado del envento personalizado",
                "replay-customEvent-state-helptext": "Especifica cómo se establece el valor target.currState en el JSON para los eventos de reproducción personalizados solo.",
				"replay-removeCustomEvent": "Eliminar reproducción personalizada",

				"domCapture-header": "Captura de DOM",
				"domCapture-enabled": "Habilitar la captura de DOM",
				"domCapture-enabled-helptext": "AVISO: La habilitación de la captura de DOM tiene consecuencias significativas sobre la transmisión y la infraestructura de datos. Por tanto, esta característica debe habilitarse con cuidado. Si se habilita, se requiere configuración adicional para realizar solo la captura DOM en función de eventos y elementos específicos. Consulte la documentación para obtener más detalles.",
				"domCapture-captureFrames": "Capturar tramas",
				"domCapture-captureFrames-helptext": "Si está seleccionado se capturarán las tramas hijo y las tramas de información. NOTA: Solo se capturará el contenido que tiene como origen el mismo dominio que la propia página padre.",
				"domCapture-removeScripts": "Eliminar scripts",
				"domCapture-removeScripts-helptext": "Si se selecciona esta opción se eliminarán todas las etiquetas de script de la instantánea capturada.",
                "domCapture-diffEnabled": "Habilitar diferencias de DOM",
                "domCapture-diffEnabled-helptext": "Si se marca esta opción, las diferencias de DOM se enviarán tras la instantánea completa inicial de DOM. Se recomienda habilitar esta opción.",
                "domCapture-maxLength": "Longitud máx.",
                "domCapture-maxLength-helptext": "Si se supera este umbral, no se enviará la instantánea.",
                "domCapture-maxMutations": "Máximo de mutaciones",
                "domCapture-maxMutations-helptext": "Si se alcanza o supera este umbral, se tomará una instantánea DOM completa, en lugar de una diferencia. Utilice este valor para ajustar la configuración de capturas de DOM y establecer un límite de seguridad que impida cuellos de botella de rendimiento, debidos al proceso de un número elevado de mutaciones DOM.",
				"domCapture-subHeader": "Añadir activadores de captura de DOM",
				"domCapture-trigger": "Desencadenante",
				"domCapture-addTrigger": "Añadir desencadenante",
				"domCapture-event": "Evento",
				"domCapture-event-helptext": "Los eventos disponibles son load, upload, click o change.",
				"domCapture-screenview": "Vista de pantalla",
				"domCapture-addScreenview": "Añadir vista de pantalla",
				"domCapture-removeScreenview": "Eliminar vista de pantalla",
				"domCapture-delay": "Retardar",
				"domCapture-delay-helptext": "Retardo opcional (en milisegundos) después del cual se debe tomar la instantánea de DOM.",
				"domCapture-delay-placeholder": "Especifique un número",
                "domCapture-fullDOMCapture": "Captura DOM completa",
                "domCapture-fullDOMCapture-helptext": "Si se selecciona se realizará una instantánea DOM completa para este desencadenante.",
				"domCapture-removeTrigger": "Eliminar desencadenante",
				"domCapture-addTarget": "Añadir destino",
				"domCapture-removeTarget": "Eliminar destino",
				"domCapture-target": "Destino",
				"domCapture-target-id": "ID",
				"domCapture-target-id-helptext": "ID del destino como el del especificado de los tres tipos de ID.",
				"domCapture-target-idType": "Tipo de ID",
				"domCapture-target-idType-helptext": "HTML ID, XPath, o ID personalizado del elemento.",
				"domCapture-target-cssSelector": "Selector CSS",
				"domCapture-target-cssSelector-helptext": "Añadir una serie de selector CSS única.",
                "domCapture-load": "load",
                "domCapture-unload": "unload",
                "domCapture-click": "click",
                "domCapture-change": "change",
                "domCapture-custom": "custom",
                "domCapture-custom-eventName": "Nombre de evento personalizado:",

                "DCCookie-header": "Gestión de cookies y sesiones",
                "DCCookie-enabled": "Habilitar módulo DCCookie",
                "DCCookie-enabled-helptext": "El módulo DCCookie permite la configuración de la clave de aplicación y la cookie de inicio de sesión. Son necesarias si se utiliza el servicio Discover SaaS. Para obtener información adicional, consulte la documentación de Discover SaaS.",
                "DCCookie-dcAppKey": "Clave de aplicación",
                "DCCookie-dcAppKey-helptext": "Introduzca la clave de aplicación Discover SaaS en este campo.",
                "DCCookie-sessionCookie": "Nombre de cookie de inicio de sesión",
                "DCCookie-sessionCookie-helptext": "Especifique la cookie que se utiliza para el inicio de sesión. Si se especifica <strong>DCXSID</strong> como cookie de inicio de sesión, UIC creará la cookie si aún no existe.",
                
                "geolocation-header": "Ubicación geográfica",
                "geolocation-enable": "Habilitar registro de ubicación geográfica",
                "geolocation-load": "Ubicación geográfica durante el evento de carga",
                "geolocation-load-helptext": "Habilitará el registro de ubicación geográfica durante el evento de carga",
                "geolocation-helptext": "El registro de ubicación geográfica notifica la latitud, la longitud y la precisión de las mediciones si está disponible.",

                "misc-header": "Valores varios",
                "sessionData-options": "Opciones de compartición de datos de sesión",
                "sessionData-Enable": "Compartir datos de sesión",
                "sessionData-Enable-description": "La selección de esta opción permitirá compartir los datos de sesión con otros scripts en la página. Consulte la documentación para obtener detalles.",
                "sessionData-Enable-helptext": "La selección de esta opción permitirá compartir los datos de sesión con otros scripts en la página. Consulte la documentación para obtener detalles.",
                "sessionId-Cookie": "Cookie",
                "sessionId-Cookie-description": "Seleccione esta opción si se utiliza una para la sesionización.",
                "sessionId-Cookie-helptext": "Seleccione esta opción si se utiliza una para la sesionización.",
                "sessionId-Query": "Parámetro de consulta",
                "sessionId-Query-description": "Seleccione esta opción si se utiliza un parámetro de consulta para la sesionización.",
                "sessionId-Query-helptext": "Seleccione esta opción si se utiliza un parámetro de consulta para la sesionización.",
                "sessionId-Cookie-Name": "Nombre de cookie",
                "sessionId-Cookie-Name-helptext": "El nombre de la cookie que se utiliza para el inicio de sesión. Por ejemplo, DCXSID, jsessionid, etc.",
                "sessionId-Query-Name": "Nombre de parámetro de consulta",
                "sessionId-Query-Name-helptext": "El nombre (es decir, LHS) del parámetro de consulta que se utiliza para el inicio de sesión.",
                "sessionId-Query-Delimiter": "Delimitador de serie de consulta",
                "sessionId-Query-Delimiter-helptext": "Especifique el delimitador de serie de consulta que utiliza la aplicación. El valor predeterminado es &",
                "sessionId-ValueNeedsHashing": "El valor necesita hashing",
                "sessionId-ValueNeedsHashingDescription": "Seleccione esta opción si es necesario aplicar hash al valor para derivar el ID de sesión.",
                "misc-frames-blacklist-label": "Tramas en lista negra",
                "misc-frames-blacklist-helptext": "Selectores CSS de tramas excluidos de la colección de datos.",
                "misc-frames-blacklist-placeholder": "Selectores CSS separados por espacio coma espacio.",

                "regextester-headline": "Pruebe las expresiones regulares",
                "regextester-regex": "Expresión regular",
                "regextester-flag-i": "No sensible a mayúsculas y minúsculas (i)",
                "regextester-flag-g": "Global (g)",
                "regextester-sample": "Muestra de comprobación",
                "regextester-matches": "¿Coincidencias?",
                "regextester-copylabel": "(listo para copiar&pegar en config)",
                "regextester-btn-test": "Probar",

                "unsupported-header": "Lamentablemente el navegador es demasiado antiguo o no se admite.",
                "unsupported-sudHeader": "Utilice uno de los navegadores siguientes:",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "(Versión 17.0 y superior)",
                "unsupported-safari-versioninfo": "(Versión 6.0 y superior)",

                "validation-timerinterval": "El intervalo de temporizador no es válido. Especifique un número entre 1000 y 600000.",
                "validation-maxevents": "Tamaño (máx. mensajes) no es válido. Especifique un número entre 1 y 100.",
                "validation-renderTimeThreshold": "El umbral de tiempo de representación no es válido, especifique un número.",
                "validation-maxSize": "Tamaño (máx. longitud serializada) no es válido. Especifique un número entre 4000 y 1000000.",

                "reload-page": "Vuelva a cargar la página para que el cambio de idioma entre en vigor."
            }

,
            fr: // NLS_CHARSET=UTF-8
{
                "site-title": "Assistant de configuration UIC",
                "page-headline": "Assistant de configuration UIC",
				"uic-version": "Version UIC ",
                "advanced-options": "Options avancées",
                "btn-prev": "Précédent",
                "btn-next": "Suivant",
                "btn-finish": "Terminer",
                "btn-reset": "Réinitialiser aux valeurs par défaut",
                "btn-regextester": "Testeur d'expression régulière",

                "library-type-prod-min": "Version de production (minimisée)",
                "library-type-prod": "Version de production (non minimisée)",
                "library-type-dev": "Version de développement (non minimisée)",

                "core-inactivityTimeout": "Délai d'attente d'inactivité (millisecondes)",
                "core-inactivityTimeout-helptext": "Le délai d'attente d'inactivité indique une valeur de délai, pendant lequel, si aucune activité d'utilisateur n'est constatée, l'UIC se termine de lui-même. " +
                                                   "La valeur de délai intégrée de 10 minutes est utilisée si aucune valeur de délai d'attente d'inactivité n'est spécifiée. " +
                                                   "<br /><em>Remarque :</em> Si vous indiquez une valeur de délai égale à 0, cette fonction est désactivée. Cette action peut générer des occurrences d'IU orphelines et n'est donc pas recommandée.",

                "browserService-header": "Configuration du service de navigateur",
                "browserService-subHeader": "Sélectionnez une mouture :",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "La mouture jQuery est prise en charge UNIQUEMENT si l'application Web utilise jQuery version 1.7 ou ultérieure.",
                "browserService-jQuery-description": "La mouture jQuery de la bibliothèque UIC utilise l'API jQuery pour accès DOM inter-navigateurs.",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "Pour tous les autres.",
                "browserService-w3c-description": "La mouture W3C de la bibliothèque UIC utilise directement les API DOM de navigateur." +
                                                  "<br /><em>Remarque :</em> la mouture W3C requiert que la bibliothèque d'éditeur tiers Sizzle JS soit également incluse. Reportez-vous à la section d'URL Sizzle dans les options avancées.",

                "browserService-useCapture": "Utiliser une phase de capture pour l'écoute d'événements",
                "browserService-useCapture-helptext": "Autorise la phase de capture d'événement lors de l'enregistrement de programmes d'écoute d'événements. Si elle est désactivée, la propagation d'événements est utilisée, pouvant entraîner l'omission de certains événements, s'ils ne sont pas autorisés dans le processus. Il est recommandé d'activer ce paramètre." +
                                                      "<br /><em>Remarque :</em> Les versions anciennes d'Internet Explorer (IE 8 et versions antérieures) ne prennent pas en charge la phase de capture et permettront automatiquement le recours à la propagation d'évenements." +
                                                      "<br />Pour obtenir de plus amples détails sur ce paramètre, consultez les spécifications DOM sur le site de W3C : http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture",
                "browserService-sizzleObject": "Objet Sizzle",
                "browserService-sizzleObject-helptext": "Chemin de l'objet Sizzle. S'il n'est pas spécifié, window.Sizzle est utilisé par défaut." +
                                                        "<br /><br /><em>Remarque :</em> Sizzle est requise pour le bon fonctionnement de la bibliothèque dans les anciennes versions d'Internet Explorer (IE 8 et versions antérieures) lors de l'utilisation du service W3C." +
                                                        " Si l'application utilise une version quelconque de jQuery, une instruction d'inclusion Sizzle séparée est inutile car jQuery inclut déjà Sizzle." +
                                                        " Sizzle peut être téléchargé à partir de http://sizzlejs.com/",
                "browserService-jQueryObject": "Objet jQuery",
                "browserService-jQueryObject-helptext": "Chemin de l'objet jQuery. S'il n'est pas spécifié, window.jQuery est utilisé par défaut.",
                "browserService-blacklistedElements": "Eléments sur liste noire",
                "browserService-blacklistedElements-placeholder": "ID ou expressions régulières séparés par un espace.",
                "browserService-blacklistedElements-helptext": "Placez en liste noire tous les ID d'éléments qui ne sont pas uniques et/ou ne sont pas générés dynamiquement. Les ID d'éléments qui correspondent à l'une des entrées de la liste noire seront remplacés par des valeurs d'attributs personnalisés ou XPATH." +
                                                               "<br /><br />Conseil : utilisez le testeur RegEx pour valider les expressions régulières utilisées pour configurer la liste noire.",
                "browserService-customID": "ID d'attribut personnalisé",
                "browserService-customID-placeholder": "Nom de l'attribut.",
                "browserService-customID-helptext": "Un ou plusieurs attributs pouvant être utilisé pour identifier de manière unique un élément lorsque son ID HTML n'est pas disponible ou figure en liste noire.",
				"browserService-ieExcludedLinks": "Liens Internet Explorer exclus",
				"browserService-ieExcludedLinks-placeholder": "Sélecteurs de feuille de style en cascade séparés par des virgules.",
				"browserService-ieExcludedLinks-helptext": "Cette configuration est spécifiée sous forme de tableau de sélecteurs de feuille de style en cascade. Par exemple, la configuration pourrait être spécifiée ainsi : " +
															" a[href^='javascript:'] " +
															"pour ignorer l'événement beforeunload déclenché par le lien suivant : < a href='javascript:void(0);'>Cliquez ici< /a>" +
															"<br/>REMARQUE : Si un caractère non valide (par exemple, $) est spécifié et n'est pas correctement accompagné des caractères d'échappement \\, une exception est renvoyée dans les navigateurs Chrome et Webkit.",
                "queueService-header": "Configuration du service de file d'attente",
                "queueService-subHeader": "Configurez la file d'attente interne de la bibliothèque",
                "queueService-queueName": "Nom",
                "queueService-queueName-helptext": "Une seule file d'attente est prise en charge dans cette édition. Le nom de la file d'attente DOIT être 'DEFAULT'. Ne changez pas cette valeur.",
                "queueService-queueEndpoint": "Noeud final (page cible)",
                "queueService-queueEndpoint-helptext": "URL de la page cible sur le serveur Web où les données capturées seront publiées. Les URL interdomaines ne sont pas prises en charge dans cette édition.",
                "queueService-queueSize-events": "Taille (nombre maximal de messages)",
                "queueService-queueSize-events-helptext": "Seuil au-delà duquel la file d'attente sera vidée. Les valeurs recommandées se situent entre 1 et 50 pour les tests et entre 20 et 50 pour un déploiement en production.",
                "queueService-queueSize-serialized": "Taille (nombre sérialisée maximale)",
                "queueService-queueSize-serialized-helptext": "Seuil de longueur de file sérialisée au-delà duquel la file d'attente sera vidée. Les valeurs recommandées se situent entre 8000 et 20000 pour un déploiement en production." +
                                                    "<br/>REMARQUE : Si le codage gzip est utilisé, la valeur doit être augmentée pour refléter la taille limite précodée." +
                                                    "<br/>AVERTISSEMENT : L'activation de ce paramètre peut avoir un impact sur les performances dans certains cas car elle repose sur la sérialisation de la file d'attente dans le but de vérifier le seuil.",
                "queueService-queueSize-serialized-label": " (une valeur 0 désactive ce paramètre)",
                "queueService-queueTimer": "Intervalle de temps (millisecondes)",
                "queueService-queueTimer-label": " millisecondes (une valeur 0 désactive le temporisateur)",
                "queueService-queueTimer-helptext": "Pour activer les scénarios d'effets d'ombrages dans les navigateurs, vous pouvez définir la valeur du temporisateur de sorte à vider périodiquement la file d'attente quel que soit le nombre de messages. Dans la plupart des autres cas, il est préférable de laisser ce paramètre désactivé.",

                "queueService-crossDomainEnabled": "Activer les messages POST interdomaines.",
                "queueService-crossDomainFrameSelector": "Sélecteur de cadre interdomaine",
                "queueService-crossDomainFrameSelector-helptext": "Le sélecteur de cadre interdomaine doit spécifier l'élément iframe ou l'élément frame sur la page qui a été configurée pour publier les demandes POST.",

				"queueService-asyncReqOnUnload": "Activer les requêtes XHR asynchrones lors du déchargement de page.",
				"queueService-asyncReqOnUnload-helptext": "Cochez cette option pour activer les requêtes asynchrones lors du déchargement de page.<br />Avertissement : l'activation de requêtes asynchrones lors du déchargement de page peut se traduire par des données incomplètes ou manquantes.",

                "queueService-checkEndpoint": "Vérifier le noeud final",
                "queueService-checkEndpoint-helptext": "Envoyer une demande asynchrone afin de vérifier si le noeud final Discover est disponible.",
                "queueService-endpointCheckTimeout": "Délai de vérification de noeud final",
                "queueService-endpointCheckTimeout-helptext": "Délai d'attente de la demande asynchrone visant à vérifier si le noeud final Discover est disponible.",

                "queueService-queueSerializer": "Sérialiseur",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "Seule la sérialisation JSON est prise en charge.",
                "queueService-addQueue": "Ajouter une autre file d'attente",

                "messageService-header": "Configuration du service de messagerie",
                "messageService-subHeader": "Configuration de masquage pour confidentialité",
                "messageService-targets": "Cibles",
                "messageService-id": "ID",
                "messageService-id-helptext": "ID HTML, XPath ou ID d'attribut personnalisé ('nom_attribut=valeur_attribut') de l'élément devant être masqué.",
                "messageService-idType": "Type d'ID",
                "messageService-idType--1": "ID HTML",
                "messageService-idType--2": "xPath",
                "messageService-idType--3": "ID d'attribut personnalisé",
                "messageService-idType-helptext": "Sélectionnez le type d'ID approprié.",
                "messageService-addTarget": "Ajouter une autre cible",
                "messageService-maskType": "Type de masque",
                "messageService-maskType-1": "Vide",
                "messageService-maskType-2": "De base",
                "messageService-maskType-3": "Type",
                "messageService-maskType-4": "Personnalisé",
                "messageService-maskType-helptext": "Le type de masque indique de quelle façon la valeur doit être transformée." +
                                                    "<dl>" +
                                                        "<dt><b>Vide :</b></dt>" +
                                                        "<dd>La valeur est définie sur une chaîne vide.</dd>" +
                                                        "<dt><b>De base :</b></dt>" +
                                                        "<dd>La valeur est remplacée par la chaîne fixe : \"XXXXX\".</dd>" +
                                                        "<dt><b>Type :</b></dt>" +
                                                        "<dd>" +
                                                            "La valeur est remplacée par un masque où chaque:" +
                                                            "<ul>" +
                                                                "<li>caractère en minuscule est remplacé par : \"x\",</li>" +
                                                                "<li>caractère en majuscule est remplacé par : \"X\",</li>" +
                                                                "<li>nombre est remplacé par : \"9\",</li>" +
                                                                "<li>symbole est remplacé par : \"@\".</li>" +
                                                            "</ul>" +
                                                            "Ainsi la chaîne : \"HelloWorld123\" devient : \"XxxxxXxxxx999\"" +
                                                        "</dd>" +
                                                        "<dt><b>Personnalisé :</b></dt>" +
                                                        "<dd>La valeur est remplacée par la valeur renvoyée par une fonction personnalisée qui doit être rédigée dans la zone de saisie MaskFunction.</dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "Fonction de masquage",
                "messageService-maskFunction-helptext": "Fonction JavaScript qui accepte une chaîne non masquée et renvoie la valeur masquée.",
                "messageService-addConfiguration": "Ajouter une configuration de confidentialité",
				"messageService-cssSelector": "Sélecteur CSS",
				"messageService-cssSelector-helptext": "Ajoutez une chaîne de sélecteur CSS unique",
				"services-message-privacy-cssSelector-placeholder": "Ajoutez ici une chaîne de sélecteur CSS",
				"messageService-removePrivacyConfigurationTarget": "Supprimer la cible",
				"messageService-removePrivacyConfiguration": "Supprimer la configuration de confidentialité",

                "serializer-header": "Configuration du service sérialiseur",
                "serializer-defaultToBuiltin": "Utiliser l'analyseur/sérialiseur intégré si aucun autre n'est disponible",
                "serializer-defaultToBuiltin-helptext": "UIC est livré avec sa propre implémentation de base d'analyseur/sérialiseur JSON. Le choix de l'analyseur/sérialiseur JSON est effectué comme suit :<br />" +
                                                        "<ol>" +
                                                          "<li>Si un analyseur/sérialiseur JSON est explicitement spécifié dans la configuration ci-dessous, l'UIC l'utilise." +
                                                          "<li>Si aucun analyseur/sérialiseur JSON n'est spécifié explicitement dans la configuration ci-dessous, l'UIC vérifie si le navigateur assure une prise en charge native de JSON." +
                                                          "<li>Si le navigateur n'assure pas une prise en charge native de JSON et que cette case est cochée, l'UIC utilise sa propre implémentation de base de JSON." +
                                                          "<li>Si aucune des options ci-dessus ne s'applique, l'UIC échoue sans notification." +
                                                        "</ol>",
                "serializer-parsers": "Analyseurs",
                "serializer-parsers-helptext": "La liste contient des fonctions d'analyse que l'UIC doit utiliser (par exemple, JSON.parse). La première est la plus importante. Si l'UIC ne la trouve pas, il essaye la suivante (si elle a été spécifiée), et ainsi de suite.",
                "serializer-parser": "Analyseur",
                "serializer-addParser": "Ajouter un autre analyseur",
                "serializer-stringifiers": "Sérialiseurs",
                "serializer-stringifiers-helptext": "La liste contient des fonctions de sérialiseur que l'UIC doit utiliser (par exemple, JSON.stringify). La première est la plus importante. Si l'UIC ne la trouve pas, il essaye la suivante (si elle a été spécifiée), et ainsi de suite.",
                "serializer-stringifier": "Sérialiseur",
                "serializer-addStringifier": "Ajouter un autre sérialiseur",

				"encoder-header": "Configuration du service encodeur",
				"encoder": "Encodeur",
				"encoder-enable": "Activer",
                "encoder-enable-helptext": "Activez ce service pour permettre à l'UIC d'appliquer la compression gzip aux données de demande. Notez que le service encodeur dépend de la bibliothèque Open Source 'pako' qui doit être incluse et initialisée sur la page avant l'initialisation de l'UIC. Pour plus d'informations sur 'pako', notamment les téléchargements, voir https://github.com/nodeca/pako",
				"encoder-encode": "Coder",
				"encoder-defaultEncoding": "Codage par défaut",
				"encoder-helptext": "Configurez le service d'encodeur de compression. Par défaut, gzip est configuré.",
				"encoder-defaultEncoding-helptext": "Type de codage qui sera spécifié par l'UIC dans l'en-tête de la demande HTTP. Par défaut, il s'agit de 'Content-encoding: gzip'.",
				"encoder-encode-helptext": "Chemin de l'encodeur. Par défaut, il s'agit de 'window.pako.gzip'.",

                "modules-header": "Modules",
                "modules-subHeader": "Sélectionner les modules activés",
                "modules-performance": "Performances",
                "modules-performance-helptext": "Propriétés de chronométrage de la navigation W3C",
                "modules-PerformanceSettings": "Paramètres de performances",
                "modules-replay": "relecture",
                "modules-replay-helptext": "Suivi des interactions de l'utilisateur pour activer la génération d'événements de relecture, de mode d'utilisation et d'événements basés sur des étapes.",
				"modules-usability": "Usability",
				"modules-usability-helptext": "Ajoute à la configuration les événements usability mouseout, mousemove et click.",
                "modules-moduleBaseURL": "URL du module de base :",
                "modules-moduleBaseURL-helptext": "Emplacement sur le serveur depuis lequel des modules peuvent être chargés dynamiquement. Cette option n'est pas utilisée dans la version actuelle.",
                "modules-replay-events": "Relecture d'événements",
                "modules-hover-tracking": "Activer le suivi des survols",
                "modules-mobile-events": "Activer les événements de périphériques mobiles",
                "modules-hashchange": "Activer les vues d'écran depuis événement hashchange",
                "modules-scroll-winsize": "Activer le suivi du défilement et de la taille de la fenêtre",
				"modules-navigationStart-helptext": "Cet attribut doit renvoyer l'heure immédiatement après que l'agent utilisateur a invité l'utilisateur à décharger le document précédent. En l'absence d'un tel document, cet attribut doit renvoyer la même valeur que fetchStart.",
				"modules-unloadEventStart-helptext": "Si le document précédent et le document en cours ont la même origine [IETF RFC 6454], cet attribut doit renvoyer l'heure immédiatement avant que l'agent utilisateur ne lance l'événement de déchargement du document précédent. S'il n'existe aucun document précédent ou que son origine est différente de celle du document en cours, cet attribut doit renvoyer zéro.",
				"modules-unloadEventEnd-helptext": "Si le document précédent et le document en cours ont la même origine, cet attribut doit renvoyer l'heure immédiatement après que l'agent utilisateur a complété l'événement de déchargement du document précédent. S'il n'existe aucun document précédent, que son origine est différente de celle du document en cours ou que le déchargement n'est pas encore terminé, cet attribut doit renvoyer zéro. En cas de redirections HTTP, ou équivalent, lors de la navigation et que les redirections , ou équivalent, n'ont pas toutes la même origine, unloadEventStart et unloadEventEnd doivent tous deux renvoyer la valeur zéro.",
				"modules-redirectStart-helptext": "En cas de redirections HTTP, ou équivalent, lors de la navigation et que les redirections , ou équivalent, ont toutes la même origine, cet attribut doit renvoyer l'heure de début de la recherche qui a engendré le réacheminement. Sinon, cet attribut doit renvoyer zéro.",
				"modules-redirectEnd-helptext": "En cas de redirections HTTP, ou équivalent, lors de la navigation et que les redirections , ou équivalent, ont toutes la même origine, cet attribut doit renvoyer l'heure immédiatement après avoir reçu le dernier octet de la réponse du dernier réacheminement. Sinon, cet attribut doit renvoyer zéro.",
				"modules-fetchStart-helptext": "Si la nouvelle ressource doit être extraite à l'aide de HTTP GET, ou d'un équivalent, fetchStart doit renvoyer l'heure immédiatement avant que l'agent utilisateur ne commence à vérifier les caches d'application pertinents. Sinon, il doit renvoyer l'heure à laquelle l'agent utilisateur commence à rechercher la ressource.",
				"modules-domainLookupStart-helptext": "Cet attribut doit renvoyer l'heure immédiatement avant que l'agent utilisateur ne lance la recherche du nom de domaine pour le document en cours. Si une connexion persistante [RFC 2616] est utilisée ou que le document en cours est extrait de caches d'application pertinents ou de ressources locales, cet attribut doit renvoyer la même valeur que fetchStart.",
				"modules-domainLookupEnd-helptext": "Cet attribut doit renvoyer l'heure immédiatement après que l'agent utilisateur termine la recherche du nom de domaine pour le document en cours. Si une connexion persistante [RFC 2616] est utilisée ou que le document en cours est extrait de caches d'application pertinents ou de ressources locales, cet attribut doit renvoyer la même valeur que fetchStart.",
				"modules-connectStart-helptext": "Cet attribut doit renvoyer l'heure immédiatement avant que l'agent utilisateur ne commence à établir la connexion avec le serveur afin d'extraire le document. Si une connexion persistante [RFC 2616] est utilisée ou que le document en cours est extrait de caches d'application pertinents ou de ressources locales, cet attribut doit renvoyer la valeur de domainLookupEnd.",
				"modules-connectEnd-helptext": "Cet attribut doit renvoyer l'heure immédiatement après que l'agent utilisateur ait fini d'établir la connexion avec le serveur afin d'extraire le document. Si une connexion persistante [RFC 2616] est utilisée ou que le document en cours est extrait de caches d'application pertinents ou de ressources locales, cet attribut doit renvoyer la valeur de domainLookupEnd. Si la connexion de transport échoue et que l'agent utilisateur rouvre une connexion, connectStart et connectEnd doivent renvoyer les valeurs correspondantes de la nouvelle connexion. connectEnd doit inclure l'intervalle de temps au bout duquel établir la connexion de transport, ainsi que d'autres intervalles de temps tels que pour l'établissement de liaison SSL et l'authentification SOCKS.",
				"modules-secureConnectionStart-helptext": "Cet attribut est facultatif. Les agents utilisateur pour lesquels cet attribut n'est pas disponible doivent le spécifier comme non défini. Lorsque cet attribut est disponible et que le schéma de la page actuelle est HTTPS, cet attribut doit renvoyer l'heure immédiatement avant que l'agent utilisateur n'entame la procédure d'établissement de liaison afin de sécuriser la connexion actuelle. Si cet attribut est disponible mais que HTTPS n'est pas utilisé, cet attribut doit renvoyer zéro.",
				"modules-requestStart-helptext": "Cet attribut doit renvoyer l'heure immédiatement avant que l'agent utilisateur ne commence à demander le document actuel au serveur ou aux caches d'application pertinents, ou encore aux ressources locales. Si la connexion de transport échoue après l'envoi d'une demande et que l'agent utilisateur rouvre une connexion afin de soumettre à nouveau la demande, requestStart doit renvoyer les valeurs correspondantes de la nouvelle demande.",
				"modules-responseStart-helptext": "Cet attribut doit renvoyer l'heure immédiatement après que l'agent utilisateur ait reçu le premier octet de la réponse du serveur, des caches d'application pertinents ou des ressources locales.",
				"modules-responseEnd-helptext": "Cet attribut doit renvoyer l'heure immédiatement après que l'agent utilisateur ait reçu le dernier octet du document actuel ou immédiatement après que la connexion de transport ait été fermée (selon ce qui se produit en premier). Le document peut être reçu ici du serveur, des caches d'application pertinents ou encore des ressources locales.",
				"modules-domLoading-helptext": "Cet attribut doit renvoyer l'heure immédiatement avant que l'agent utilisateur ne définisse l'état de préparation du document actuel à 'en cours de chargement'.",
				"modules-domInteractive-helptext": "Cet attribut doit renvoyer l'heure immédiatement avant que l'agent utilisateur ne définisse l'état de préparation du document actuel à 'interactif'.",
				"modules-domContentLoadedEventStart-helptext": "Cet attribut doit renvoyer l'heure immédiatement avant que l'agent utilisateur ne déclenche l'événement DOMContentLoaded pour le document.",
				"modules-domContentLoadedEventEnd-helptext": "Cet attribut doit renvoyer l'heure immédiatement après l'achèvement de l'événement DOMContentLoaded pour le document.",
				"modules-domComplete-helptext": "Cet attribut doit renvoyer l'heure immédiatement avant que l'agent utilisateur ne définisse l'état de préparation du document actuel à 'terminé'. Si l'état de préparation du document passe au même état à plusieurs reprises, domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd et domComplete doivent renvoyer l'heure de la première occurrence du passage à cet état de préparation du document.",
				"modules-loadEventStart-helptext": "Cet attribut doit renvoyer l'heure immédiatement après que l'événement de chargement (load) du document actuel ait été déclenché. Il doit renvoyer zéro si l'événement de chargement n'a pas encore été déclenché.",
				"modules-loadEventEnd-helptext": "Cet attribut doit renvoyer l'heure d'achèvement de l'événement de chargement du document actuel. Il doit renvoyer zéro si l'événement de chargement n'a pas encore été déclenché ou ne s'est pas encore achevé.",
				"modules-mobile-events-helptext": "Active la relecture d'événements de sessions de périphériques mobiles.",
				"modules-hashchange-helptext": "Lorsqu'elle est activée, cette option génère des événements de vue d'écran lorsqu'un événement hashchange a été identifié dans l'URL de la page. Un événement de vue d'écran est inséré dans les données de session et les événements d'interface utilisateur capturés par UI Capture peuvent être organisés sous la vue d'écran dans laquelle ils se sont produits.",
				"modules-scroll-winsize-helptext": "Remarque : selon votre application, le suivi des défilements dans la fenêtre peut générer un nombre d'événements significatif. La relecture des événements de défilement n'est prise en charge pour les sessions de périphériques mobiles que dans BBR.",

                "performance-calculateRenderTime": "Calculer le temps de rendu pour les navigateurs qui ne gèrent pas le chronométrage de navigation W3C",
                "performance-calculateRenderTime-helptext": "Le temps de rendu est calculé en mesurant la différence de temps <br>entre chargement de page et chargement de bibliothèque.",
                "performance-calculateRenderTime-description": "Lorsque ce paramètre est activé, la bibliothèque calcule le temps de rendu comme étant la différence entre son temps de chargement et le temps de chargement de la page. Pour une mesure précise, veillez à ce que la bibliothèque soit chargée aussitôt que possible dans le cycle de chargement de page.",
				"performance-renderTimeThreshold": "Seuil du temps de rendu : ",
				"performance-renderTimeThreshold-helptext": "Temps de rendu maximal, en millisecondes. Valeur par défaut : 10 minutes <br>(600000 millisecondes). Un temps de rendu mesuré qui dépasse <br>ce seuil est signalé comme 'invalidRenderTime' (temps de rendu non valide) et n'est pas inclus <br>dans les rapports de performance de temps de rendu.",

				"replay-customEventName-placeholder": "Entrez un seul nom d'événement. Par exemple, mousedown",
				"replay-customEventTarget-placeholder": "Entrez un sélecteur CSS pour l'élément cible.",
				"replay-customEvent": "Evénement de relecture personnalisé",
				"replay-customEvent-helptext": "Entrez le sélecteur CSS pour l'élément cible délégué OU le document OU la fenêtre",
				"replay-addCustomDelegate": "Ajouter un événement de relecture personnalisé",
				"replay-customEvent-name": "Nom d'événement",
				"replay-customEvent-target": "Evénement cible",
				"replay-customEvent-name-helptext": "Entrez ici le nom de l'événement. Par exemple, mousedown",
				"replay-customEvent-target-helptext": "Entrez le sélecteur CSS pour les éléments cible OU le document OU la fenêtre",
				"replay-customEvent-delegateTarget": "Evénement cible délégué (facultatif)",
				"replay-customEvent-delegateTarget-helptext": "Entrez le sélecteur CSS pour l'élément cible délégué OU le document OU la fenêtre. Ce paramètre est facultatif.",
				"replay-customEvent-recurseFrames": "Cadres récursifs (facultatif)",
				"replay-customEvent-recurseFrames-helptext": "Si cette case est cochée, applique un programme d'écoute de l'événement aux cadres/iframes enfants du document. Ce paramètre est facultatif.",
                "replay-customEvent-state": "Etat",
                "replay-customEventState-placeholder": "Entrez la propriété à utiliser comme état de l'événement personnalisé",
                "replay-customEvent-state-helptext": "Spécifie comment la valeur target.currState est définie dans JSON pour relecture d'événements personnalisée uniquement.",
				"replay-removeCustomEvent": "Supprimer la relecture personnalisée",

				"domCapture-header": "Capture DOM",
				"domCapture-enabled": "Activer la capture DOM",
				"domCapture-enabled-helptext": "AVERTISSEMENT : L'activation de la capture DOM a des implications significatives sur la transmission et l'infrastructure des données. Par conséquent, cette fonction doit être activée de manière pertinente. Si elle est activée, d'autres étapes de configuration doivent être exécutées afin d'effectuer uniquement la capture DOM en fonction de certains événements et éléments. Pour plus de détails, reportez-vous à la documentation.",
				"domCapture-captureFrames": "Capture de cadres",
				"domCapture-captureFrames-helptext": "Si cette case est cochée, les cadres et les iframes enfants seront capturés. REMARQUE : Seul le contenu provenant du même domaine que la page parent proprement dite peut être capturé.",
				"domCapture-removeScripts": "Retirer les scripts",
				"domCapture-removeScripts-helptext": "Si cette option est cochée, toutes les balises de script seront retirées de l'instantané capturé.",
                "domCapture-diffEnabled": "Activer les différences DOM",
                "domCapture-diffEnabled-helptext": "Si cette option est activée, les différences DOM seront envoyées après l'instantané DOM complet initial. Il est recommandé d'activer ce paramètre.",
                "domCapture-maxLength": "Longueur maximale",
                "domCapture-maxLength-helptext": "Si ce seuil est dépassé, l'instantané ne sera pas envoyé.",
                "domCapture-maxMutations": "Mutations maximales",
                "domCapture-maxMutations-helptext": "Si ce seuil est atteint ou dépassé, un instantané DOM complet sera effectué au lieu d'une comparaison. Utilisez ce paramètre pour affiner votre configuration de capture DOM et configurez une limite de sécurité qui empêchera les goulots d'étranglement des performances dus au traitement de mutations DOM excessives.",
				"domCapture-subHeader": "Ajouter des déclencheurs de capture DOM",
				"domCapture-trigger": "Déclencheur",
				"domCapture-addTrigger": "Ajouter un déclencheur",
				"domCapture-event": "Evénement",
				"domCapture-event-helptext": "Les événements disponibles sont : chargement, déchargement, clic ou modification.",
				"domCapture-screenview": "Vue écran",
				"domCapture-addScreenview": "Ajouter une vue écran",
				"domCapture-removeScreenview": "Supprimer une vue écran",
				"domCapture-delay": "Délai",
				"domCapture-delay-helptext": "Délai facultatif (en millisecondes) après lequel l'instantané DOM doit être capturé.",
				"domCapture-delay-placeholder": "Entrez un nombre",
                "domCapture-fullDOMCapture": "Capture DOM complète",
                "domCapture-fullDOMCapture-helptext": "Si cette case est cochée, un instantané DOM complet sera effectué pour ce déclencheur.",
				"domCapture-removeTrigger": "Supprimer le déclencheur",
				"domCapture-addTarget": "Ajouter une cible",
				"domCapture-removeTarget": "Supprimer la cible",
				"domCapture-target": "Cible",
				"domCapture-target-id": "ID",
				"domCapture-target-id-helptext": "ID de la cible (spécifiez l'un des trois types d'ID).",
				"domCapture-target-idType": "Type d'ID",
				"domCapture-target-idType-helptext": "HTML ID, XPath ou ID personnalisé de l'élément.",
				"domCapture-target-cssSelector": "Sélecteur CSS",
				"domCapture-target-cssSelector-helptext": "Ajoutez une chaîne de sélecteur CSS unique.",
                "domCapture-load": "chargement",
                "domCapture-unload": "déchargement",
                "domCapture-click": "clic",
                "domCapture-change": "modification",
                "domCapture-custom": "personnalisé",
                "domCapture-custom-eventName": "Nom d'événement personnalisé",

                "DCCookie-header": "Gestion de session et de cookie",
                "DCCookie-enabled": "Activer le module DCCookie",
                "DCCookie-enabled-helptext": "Le module DCCookie autorise la configuration de la clé d'application et du cookie de mise en sessions. Ces éléments sont requis lors de l'utilisation du service Discover SaaS. Pour plus d'informations, consultez la documentation relative à Discover SaaS.",
                "DCCookie-dcAppKey": "Clé d'application",
                "DCCookie-dcAppKey-helptext": "Entrez la clé d'application Discover SaaS dans cette zone.",
                "DCCookie-sessionCookie": "Nom de cookie de mise en sessions",
                "DCCookie-sessionCookie-helptext": "Spécifiez le cookie utilisé pour la mise en sessions. Si vous spécifiez <strong>DCXSID</strong> comme cookie de mise en sessions, l'UIC crée le cookie s'il n'existe pas déjà.",
                
                "geolocation-header": "Géolocalisation",
                "geolocation-enable": "Activer la consignation de la géolocalisation",
                "geolocation-load": "Géolocalisation lors d'événement de chargement",
                "geolocation-load-helptext": "Active la consignation de géolocalisation lors de l'événement de chargement",
                "geolocation-helptext": "La consignation de géolocalisation rend compte de la latitude, de la longitude et de la précision des mesures si ces informations sont disponibles.",

                "misc-header": "Paramètres divers",
                "sessionData-options": "Options de partage de données de session",
                "sessionData-Enable": "Partager les données de session",
                "sessionData-Enable-description": "La sélection de cette option active le partage des données de session avec d'autres scripts sur la page. Reportez-vous à la documentation pour plus de détails.",
                "sessionData-Enable-helptext": "La sélection de cette option active le partage des données de session avec d'autres scripts sur la page. Reportez-vous à la documentation pour plus de détails.",
                "sessionId-Cookie": "Cookie",
                "sessionId-Cookie-description": "Sélectionnez cette option si un cookie est utilisé pour la mise en sessions.",
                "sessionId-Cookie-helptext": "Sélectionnez cette option si un cookie est utilisé pour la mise en sessions.",
                "sessionId-Query": "Paramètre de requête",
                "sessionId-Query-description": "Sélectionnez cette option si un paramètre de requête est utilisé pour la mise en sessions.",
                "sessionId-Query-helptext": "Sélectionnez cette option si un paramètre de requête est utilisé pour la mise en sessions.",
                "sessionId-Cookie-Name": "Nom du cookie",
                "sessionId-Cookie-Name-helptext": "Nom du cookie utilisé pour la mise en sessions. Par exemple, DCXSID, jsessionid, etc.",
                "sessionId-Query-Name": "Nom du paramètre de requête",
                "sessionId-Query-Name-helptext": "Nom (c.à.d., LHS) du paramètre de requête utilisé pour la mise en sessions.",
                "sessionId-Query-Delimiter": "Délimiteur de la chaîne de requête",
                "sessionId-Query-Delimiter-helptext": "Indiquez le délimiteur de chaîne de requête utilisé par l'application. Par défaut, il s'agit de &",
                "sessionId-ValueNeedsHashing": "La valeur doit faire l'objet d'un hachage",
                "sessionId-ValueNeedsHashingDescription": "Sélectionnez cette option si la valeur doit être hachée pour dériver l'ID de session.",
                "misc-frames-blacklist-label": "Cadres placés en liste noire",
                "misc-frames-blacklist-helptext": "Sélecteurs de cadres CSS exclus de la collecte de données.",
                "misc-frames-blacklist-placeholder": "Sélecteurs CSS séparés par des espaces.",

                "regextester-headline": "Testez vos expressions régulières",
                "regextester-regex": "Expression régulière",
                "regextester-flag-i": "Insensible à la casse (i)",
                "regextester-flag-g": "Globale (g)",
                "regextester-sample": "Exemple de test",
                "regextester-matches": "Correspondance ?",
                "regextester-copylabel": "(prêt pour copier&coller dans la configuration)",
                "regextester-btn-test": "Tester",

                "unsupported-header": "Malheureusement votre navigateur est trop ancien ou n'est pas pris en charge.",
                "unsupported-sudHeader": "Veuillez utiliser l'un des navigateurs suivants :",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "(Version 17.0 ou ultérieure)",
                "unsupported-safari-versioninfo": "(Version 6.0 ou ultérieure)",

                "validation-timerinterval": "Intervalle de temps non valide. Entrez un nombre compris entre 1000 et 600000.",
                "validation-maxevents": "Taille (nombre maximal de messages) non valide. Entrez un nombre compris entre 1 et 100.",
                "validation-renderTimeThreshold": "Seuil de durée de rendu non valide. Entrez un nombre.",
                "validation-maxSize": "Taille (nombre maximale sérialisée) non valide. Entrez un nombre compris entre 4000 et 1000000.",

                "reload-page": "Rechargez la page pour que le changement de langue prenne effet."
            }

,
            it: // NLS_CHARSET=UTF-8
{
                "site-title": "Procedura guidata di configurazione UIC",
                "page-headline": "Procedura guidata di configurazione UIC",
				"uic-version": "Versione UIC ",
                "advanced-options": "Opzioni avanzate",
                "btn-prev": "Indietro",
                "btn-next": "Successivo",
                "btn-finish": "Fine",
                "btn-reset": "Ripristina valori predefiniti",
                "btn-regextester": "Tester RegEx",

                "library-type-prod-min": "Build di produzione (minified)",
                "library-type-prod": "Build di produzione (non minified)",
                "library-type-dev": "Build di sviluppo (non minified)",

                "core-inactivityTimeout": "Timeout inattività (millisecondi)",
                "core-inactivityTimeout-helptext": "Il timeout di inattività specifica un valore di tempo dopo cui, in assenza di attività utente, l'UIC verrà automaticamente chiuso. " +
                                                   "Se non viene specificato un valore di timeout si utilizza il valore incorporato di 10 minuti. " +
                                                   "<br /><em>Nota:</em> Specificando un valore di timeout pari a 0 si disabilita questa funzione. Ciò è sconsigliato e potrebbe portare ad hit dell'interfaccia utente orfani.",

                "browserService-header": "Configurazione del servizio browser",
                "browserService-subHeader": "Selezionare un flavor:",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "Il flavor jQuery è supportato SOLO se l'app Web utilizza jQuery 1.7 o versioni successive.",
                "browserService-jQuery-description": "Il flavor jQuery della libreria UIC utilizza l'API jQuery per l'accesso DOM cross-browser.",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "Per tutti gli altri.",
                "browserService-w3c-description": "Il flavor W3C della libreria UIC utilizza direttamente le API DOM del browser." +
                                                  "<br /><em>Nota:</em> il flavor W3C richiede che sia inclusa anche la libreria JS Sizzle di terze parti. Fare riferimento alla sezione URL Sizzle nelle opzioni avanzate.",

                "browserService-useCapture": "Utilizza la fase di cattura per l'ascolto degli eventi",
                "browserService-useCapture-helptext": "Abilita la fase di cattura degli eventi quando si registrano i listener degli eventi. Se questa impostazione è disabilitata, viene utilizzato il bubbling di eventi che potrebbe portare ad eventi mancati se questi hanno il bubbling inibito. Si consiglia di abilitare questa impostazione." +
                                                      "<br /><em>Nota:</em> Le versioni precedenti di Internet Explorer (IE 8 e precedenti) non supportano la fase cattura dell'evento e ripristineranno automaticamente l'utilizzo del bubbling di eventi." +
                                                      "<br />Per ulteriori dettagli su questa impostazione fare riferimento alla specifica W3C DOM: http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture",
                "browserService-sizzleObject": "Oggetto Sizzle",
                "browserService-sizzleObject-helptext": "Percorso dell'oggetto Sizzle. Se ignorato, per impostazione predefinita viene utilizzato window.Sizzle." +
                                                        "<br /><br /><em>Nota:</em> Sizzle è necessario per il corretto funzionamento della libreria nelle precedenti versioni di Internet Explorer (IE 8 e precedenti) quando si utilizza il servizio W3C." +
                                                        " Se l'app utilizza una qualsiasi versione di jQuery, non è necessario l'inserimento separato di Sizzle perché jQuery già include Sizzle." +
                                                        " È possibile scaricare Sizzle all'indirizzo http://sizzlejs.com/",
                "browserService-jQueryObject": "Oggetto jQuery",
                "browserService-jQueryObject-helptext": "Percorso dell'oggetto jQuery. Se ignorato, per impostazione predefinita viene utilizzato window.jQuery.",
                "browserService-blacklistedElements": "Elementi inseriti nella blacklist",
                "browserService-blacklistedElements-placeholder": "ID o espressioni regolari separati da spazio virgola spazio.",
                "browserService-blacklistedElements-helptext": "Inserire nella blacklist tutti gli ID elemento non univoci e/o generati in modo dinamico. Gli ID elemento che corrispondono ad una delle voci presenti nella blacklist verranno sostituiti da XPATH o valori attributo personalizzati." +
                                                               "<br /><br />Suggerimento: utilizzare il tester RegEx per convalidare le espressioni regolari utilizzate per configurare la blacklist.",
                "browserService-customID": "ID attributo personalizzato",
                "browserService-customID-placeholder": "Nome dell'attributo.",
                "browserService-customID-helptext": "Uno o più attributi che è possibile utilizzare per identificare in modo univoco un elemento quando il relativo ID HTML non è disponibile o è inserito nella blacklist.",
				"browserService-ieExcludedLinks": "Collegamenti esclusi di Internet Explorer",
				"browserService-ieExcludedLinks-placeholder": "Selettori CSS separati da virgole.",
				"browserService-ieExcludedLinks-helptext": "Questa configurazione è specificata come un array di selettori CSS. Ad esempio, la configurazione sarebbe specificata come: " +
															" a[href^='javascript:'] " +
															"per ignorare l'evento beforeunload sattivato dal seguente collegamento: < a href='javascript:void(0);'>Fare clic qui< /a>" +
															"<br/>NOTA: se viene specificato un carattere non valido (ad esempio $) che non viene preceduto dai caratteri escape \\ viene generata un'eccezione nei browser Chrome e Webkit.",
                "queueService-header": "Configurazione del servizio di coda",
                "queueService-subHeader": "Configura la coda interna della libreria",
                "queueService-queueName": "Nome",
                "queueService-queueName-helptext": "In questa release è supportata una sola coda. Il nome della coda DEVE essere 'DEFAULT'. Non modificare questo valore.",
                "queueService-queueEndpoint": "Endpoint (pagina di detinazione)",
                "queueService-queueEndpoint-helptext": "L'URL della pagina di destinazione sul server Web in cui verranno inseriti i dati catturati. Gli URL cross-domain non sono supportati in questa release.",
                "queueService-queueSize-events": "Dimensione (numero massimo di messaggi)",
                "queueService-queueSize-events-helptext": "La soglia oltre la quale di dati nella coda verranno cancellati. I valori consigliati sono compresi tra 1-50 per l'esecuzione dei test e tra 20-50 per una distribuzione di produzione.",
                "queueService-queueSize-serialized": "Dimensione (lunghezza massima serializzata)",
                "queueService-queueSize-serialized-helptext": "La soglia di lunghezza della coda serializzata oltre la quale i dati nella coda verranno cancellati. I valori consigliati sono compresi nell'intervallo 8000-20000 per una distribuzione di produzione." +
                                                    "<br/>NOTA: se viene utilizzata la codifica gzip, è necessario incrementare il valore per riflettere il limite della dimensione precedente alla codifica." +
                                                    "<br/>AVVERTENZA: l'abilitazione di questa impostazione in alcuni casi può avere impatto sulle prestazioni perché fa affidamento sulla serializzazione della coda per controllare la soglia.",
                "queueService-queueSize-serialized-label": " (il valore 0 disabilita questa impostazione)",
                "queueService-queueTimer": "Intervallo timer (millisecondi)",
                "queueService-queueTimer-label": " millisecondi (il valore 0 disabilita il timer).",
                "queueService-queueTimer-helptext": "Per l'abilitazione degli scenari di navigazione shadow, è possibile impostare il valore del timer in modo da cancellare periodicamente i dati nella cache indipendentemente dal numero di messaggi. Nella maggior parte degli altri casi, è preferibile lasciare questa impostazione disabilitata.",

                "queueService-crossDomainEnabled": "Abilita messaggi POST cross-domain.",
                "queueService-crossDomainFrameSelector": "Selettore frame cross-domain",
                "queueService-crossDomainFrameSelector-helptext": "Il selettore di frame cross-domain deve specificare l'elemento iframe o frame nella pagina configurata per le richieste POST.",

				"queueService-asyncReqOnUnload": "Abilita XHR asincrono durante lo scaricamento della pagina.",
				"queueService-asyncReqOnUnload-helptext": "Selezionare questa opzione per abilitare le richieste asincrone durante lo scaricamento della pagina.<br />AVVERTENZA: l'abilitazione delle richieste asincrone durante lo scaricamento della pagina può determinare dati mancanti o non completi.",

                "queueService-checkEndpoint": "Controlla endpoint",
                "queueService-checkEndpoint-helptext": "Invia una richiesta asincrona per verificare se l'endpoint Discover è disponibile.",
                "queueService-endpointCheckTimeout": "Timeout controllo endpoint",
                "queueService-endpointCheckTimeout-helptext": "Il timeout per la richiesta asincrona di controllo della disponibilità dell'endpoint Discover.",

                "queueService-queueSerializer": "Serializzatore",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "È supportata solo la serializzazione JSON.",
                "queueService-addQueue": "Aggiungi un'altra coda",

                "messageService-header": "Configurazione del servizio di messaggi",
                "messageService-subHeader": "Configurazione del mascheramento della riservatezza",
                "messageService-targets": "Destinazioni",
                "messageService-id": "ID",
                "messageService-id-helptext": "ID HTML, XPath oppure ID attributo personalizzato ('attrName=attrValue') dell'elemento che deve essere mascherato.",
                "messageService-idType": "Tipo ID",
                "messageService-idType--1": "ID HTML",
                "messageService-idType--2": "xPath",
                "messageService-idType--3": "ID attributo personalizzato",
                "messageService-idType-helptext": "Selezionare il tipo di ID corretto.",
                "messageService-addTarget": "Aggiungi un'altra destinazione",
                "messageService-maskType": "Tipo di maschera",
                "messageService-maskType-1": "Vuoto",
                "messageService-maskType-2": "Base",
                "messageService-maskType-3": "Tipo",
                "messageService-maskType-4": "Personalizzato",
                "messageService-maskType-helptext": "Il Tipo di maschera definisce il modo in cui deve essere trasformato il valore." +
                                                    "<dl>" +
                                                        "<dt><b>Vuoto:</b></dt>" +
                                                        "<dd>Il valore viene impostato su una stringa vuota.</dd>" +
                                                        "<dt><b>Base:</b></dt>" +
                                                        "<dd>Il valore viene sostituito dalla stringa fissa: \"XXXXX\".</dd>" +
                                                        "<dt><b>Tipo:</b></dt>" +
                                                        "<dd>" +
                                                            "Il valore viene sostituito da una maschera in cui ogni:" +
                                                            "<ul>" +
                                                                "<li>carattere minuscolo viene sostituito da: \"x\",</li>" +
                                                                "<li>carattere maiuscolo viene sostituito da: \"X\",</li>" +
                                                                "<li>numero viene sostituito da: \"9\",</li>" +
                                                                "<li>simbolo viene sostituito da: \"@\".</li>" +
                                                            "</ul>" +
                                                            "Pertanto, la stringa: \"HelloWorld123\" diventa: \"XxxxxXxxxx999\"" +
                                                        "</dd>" +
                                                        "<dt><b>Personalizzato:</b></dt>" +
                                                        "<dd>Il valore viene sostituito dal valore di ritorno di una funzione personalizzata che deve essere scritta nella casella di testo Funzione maschera.</dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "Funzione maschera",
                "messageService-maskFunction-helptext": "Funzione JavaScript che accetta una stringa non mascherata e restituisce il valore mascherato.",
                "messageService-addConfiguration": "Aggiungi configurazione della riservatezza",
				"messageService-cssSelector": "Selettore CSS",
				"messageService-cssSelector-helptext": "Aggiungi una singola stringa del selettore CSS",
				"services-message-privacy-cssSelector-placeholder": "Aggiungi stringa del selettore CSS in questo punto",
				"messageService-removePrivacyConfigurationTarget": "Rimuovi destinazione",
				"messageService-removePrivacyConfiguration": "Rimuovi configurazione della riservatezza",

                "serializer-header": "Configurazione servizio serializzatore",
                "serializer-defaultToBuiltin": "Utilizza il parser/serializzatore integrato se non disponibile",
                "serializer-defaultToBuiltin-helptext": "UIC viene fornito con la propria implementazione di base di un parser/serializzatore JSON. La scelta del parser/serializzatore JSON viene eseguita nel modo riportato di seguito:<br />" +
                                                        "<ol>" +
                                                          "<li>Se nella configurazione seguente il parser/serializzatore JSON è specificato in modo esplicito, verrà utilizzato da UIC." +
                                                          "<li>Se nella configurazione seguente non è specificato in modo esplicito alcun parser/serializzatore JSON, UIC verificherà se il browser dispone del supporto nativo per JSON." +
                                                          "<li>Se il browser non supporta JSON in modo nativo e questa casella di spunta è selezionata, UIC utilizzerà la propria implementazione di base di JSON." +
                                                          "<li>Se nessuna delle precedenti situazioni è applicabile, si verifica un errore di UIC." +
                                                        "</ol>",
                "serializer-parsers": "Parser",
                "serializer-parsers-helptext": "L'elenco contiene le funzioni del parser che devono essere utilizzate da UIC (ad esempio, JSON.parse). La prima è la più importante. Se UIC non la trova, proverà la successiva (se specificata) e così via.",
                "serializer-parser": "Parser",
                "serializer-addParser": "Aggiungi un altro parser",
                "serializer-stringifiers": "Serializzatori",
                "serializer-stringifiers-helptext": "L'elenco contiene le funzioni del serializzatore che devono essere utilizzate da UIC (ad esempio, JSON.stringify). La prima è la più importante. Se UIC non la trova, proverà la successiva (se specificata) e così via.",
                "serializer-stringifier": "Serializzatore",
                "serializer-addStringifier": "Aggiungi un altro serializzatore",

				"encoder-header": "Configurazione servizio programma di codifica",
				"encoder": "Programma di codifica",
				"encoder-enable": "Abilita",
                "encoder-enable-helptext": "Abilitare questo servizio per consentire a UIC di applicare la compressione gzip ai dati della richiesta. Notare che il servizio Programma di codifica dipende dalla libreria Open Source 'pako' che deve essere inclusa ed inizializzata nella pagina prima dell'inizializzazione di UIC. Per ulteriori informazioni relative a 'pako', inclusi i download, consultare: https://github.com/nodeca/pako",
				"encoder-encode": "Codifica",
				"encoder-defaultEncoding": "Codifica predefinita",
				"encoder-helptext": "Configurare il servizio del programma di codifica della compressione. Per impostazione predefinita, è configurato gzip.",
				"encoder-defaultEncoding-helptext": "Il tipo di codifica che verrà specificato da UIC nell'intestazione della richiesta HTTP. Per impostazione predefinita, 'Content-encoding: gzip'.",
				"encoder-encode-helptext": "Il percorso del programma di codifica. Per impostazione predefinita, 'window.pako.gzip'.",

                "modules-header": "Moduli",
                "modules-subHeader": "Seleziona moduli abilitati",
                "modules-performance": "prestazioni",
                "modules-performance-helptext": "Proprietà W3C Navigation Timing",
                "modules-PerformanceSettings": "Impostazioni delle prestazioni",
                "modules-replay": "riproduzione",
                "modules-replay-helptext": "Monitoraggio delle interazioni dell'utente per abilitare la riproduzione, l'utilizzabilità e la creazione di eventi basati su fasi.",
				"modules-usability": "Usability",
				"modules-usability-helptext": "Aggiunge gli eventi mouseout, mousemove e click usability alla configurazione.",
                "modules-moduleBaseURL": "URL moduleBase:",
                "modules-moduleBaseURL-helptext": "Ubicazione sul server da cui è possibile caricare i moduli in modo dinamico. Questa opzione non è utilizzata nella release corrente.",
                "modules-replay-events": "Eventi di riproduzione",
                "modules-hover-tracking": "Abilita traccia degli spostamenti del mouse",
                "modules-mobile-events": "Abilita eventi mobili",
                "modules-hashchange": "Abilita viste schermo da hashchange",
                "modules-scroll-winsize": "Abilita traccia delle dimensioni della finestra e dello scorrimento",
				"modules-navigationStart-helptext": "Questo attributo deve restituire l'ora immediatamente successiva a quella in cui l'agent utente termina la richiesta di scaricamento del documento precedente. Se non è presente un documento precedente, questo attributo deve restituire lo stesso valore di fetchStart.",
				"modules-unloadEventStart-helptext": "Se il documento precedente ed il documento corrente hanno la stessa origine [IETF RFC 6454], questo attributo deve restituire l'ora immediatamente precedente a quella in cui l'agent utente avvia l'evento di scaricamento del documento precedente. Se non è presente un documento precedente o se il documento precedente ha un'origine differente da quella del documento corrente, questo attributo deve restituire zero.",
				"modules-unloadEventEnd-helptext": "Se il documento precedente ed il documento corrente hanno la stessa origine, questo attributo deve restituire l'ora immediatamente successiva a quella in cui l'agent utente termina l'evento di scaricamento del documento precedente. Se non è presente un documento precedente o se il documento precedente ha un'origine differente da quella del documento corrente o se lo scaricamento non è ancora completato, questo attributo deve restituire zero. Se sono presenti reindirizzamenti HTTP o equivalenti durante la navigazione e non tutti i reindirizzamenti o equivalenti provengono dalla stessa origine, unloadEventStart e unloadEventEnd devono entrambi restituire zero.",
				"modules-redirectStart-helptext": "Se sono presenti reindirizzamenti HTTP o equivalenti durante la navigazione e tutti i reindirizzamenti o equivalenti provengono dalla stessa origine, questo attributo deve restituire l'ora di avvio dell'operazione di richiamo che avvia il reindirizzamento. In caso contrario, questo attributo deve restituire zero.",
				"modules-redirectEnd-helptext": "Se sono presenti reindirizzamenti HTTP o equivalenti durante la navigazione e tutti i reindirizzamenti e gli equivalenti provengono dalla stessa origine, questo attributo deve restituire l'ora immediatamente successiva alla ricezione dell'ultimo byte della risposta dell'ultimo reindirizzamento. In caso contrario, questo attributo deve restituire zero.",
				"modules-fetchStart-helptext": "Se la nuova risorsa deve essere richiamata utilizzando HTTP GET o una funzione equivalente, fetchStart deve restituire l'ora immediatamente precedente a quella in cui l'agent utente avvia il controllo della cache dell'applicazione pertinente. In caso contrario, deve restituire l'ora in cui l'agent utente avvia il richiamo della risorsa.",
				"modules-domainLookupStart-helptext": "Questo attributo deve restituire l'ora immediatamente precedente a quella in cui l'agent utente avvia la ricerca del nome del dominio per il documento corrente. Se viene utilizzata una connessione permanente [RFC 2616] o il documento corrente viene richiamato da risorse locali o cache dell'applicazione pertinenti, questo attributo deve restituire lo stesso valore di fetchStart.",
				"modules-domainLookupEnd-helptext": "Questo attributo deve restituire l'ora immediatamente successiva a quella in cui l'agent utente termina la ricerca del nome del dominio per il documento corrente. Se viene utilizzata una connessione permanente [RFC 2616] o il documento corrente viene richiamato da risorse locali o cache dell'applicazione pertinenti, questo attributo deve restituire lo stesso valore di fetchStart.",
				"modules-connectStart-helptext": "Questo attributo deve restituire l'ora immediatamente precedente a quella in cui l'agent utente inizia a stabilire la connessione al server per richiamare il documento. Se viene utilizzata una connessione permanente [RFC 2616] o il documento corrente viene richiamato da risorse locali o cache dell'applicazione pertinenti, questo attributo deve restituire il valore di domainLookupEnd.",
				"modules-connectEnd-helptext": "Questo attributo deve restituire l'ora immediatamente successiva a quella in cui l'agent utente termina la creazione della connessione al server per richiamare il documento corrente. Se viene utilizzata una connessione permanente [RFC 2616] o il documento corrente viene richiamato da risorse locali o cache dell'applicazione pertinenti, questo attributo deve restituire il valore di domainLookupEnd. Se la connessione di trasporto ha esito negativo e l'agent utente apre nuovamente una connessione, connectStart e connectEnd devono restituire i valori corrispondenti della nuova connessione. connectEnd deve includere l'intervallo di tempo per stabilire la connessione di trasporto ed altri intervalli di tempo come per l'autenticazione SOCKS e l'handshake SSL.",
				"modules-secureConnectionStart-helptext": "Questo attributo è facoltativo. Gli agent utente che non dispongono di questo attributo devono impostarlo come indefinito. Quando questo attributo è disponibile, se lo schema della pagina corrente è HTTPS, questo attributo deve restituire l'ora immediatamente precedente a quella in cui l'agent utente avvia il processo di handshake per proteggere la connessione corrente. Se questo attributo è disponibile ma HTTPS non viene utilizzato, deve restituire zero.",
				"modules-requestStart-helptext": "Questo attributo deve restituire l'ora immediatamente precedente a quella in cui l'agent utente inizia a richiedere il documento corrente dal server o dalle risorse locali o dalle cache dell'applicazione pertinenti. Se la connessione di trasporto ha esito negativo dopo l'invio di una richiesta e l'agent utente riapre una connessione ed invia nuovamente la richiesta, requestStart deve restituire i valori corrispondenti della nuova richiesta.",
				"modules-responseStart-helptext": "Questo attributo deve restituire l'ora immediatamente successiva a quella in cui l'agent utente riceve il primo byte della risposta dal server o dalle cache delle applicazioni pertinenti o dalle risorse locali.",
				"modules-responseEnd-helptext": "Questo attributo deve restituire l'ora immediatamente successiva a quella in cui l'agent utente riceve l'ultimo byte del documento corrente o immediatamente precedente a quella in cui la connessione di trasporto viene chiusa, qualsiasi di queste avvenga prima. Il documento in questione può essere ricevuto sia dal server, dalle cache dell'applicazione pertinente o dalle risorse locali.",
				"modules-domLoading-helptext": "Questo attributo deve restituire l'ora immediatamente precedente a quella in cui l'agent utente imposte la disponibilità del documento corrente su 'caricamento'",
				"modules-domInteractive-helptext": "Questo attributo deve restituire l'ora immediatamente precedente a quella in cui l'agent utente imposte la disponibilità del documento corrente su 'interattivo'",
				"modules-domContentLoadedEventStart-helptext": "Questo attributo deve restituire l'ora immediatamente precedente a quella in cui l'agent utente avvia l'evento DOMContentLoaded al documento.",
				"modules-domContentLoadedEventEnd-helptext": "Questo attributo deve restituire l'ora immediatamente successiva a quella del completamento dell'evento DOMContentLoaded del documento.",
				"modules-domComplete-helptext": "Questo attributo deve restituire l'ora immediatamente precedente a quella in cui l'agent utente imposta la disponibilità del documento su 'completo' Se la disponibilità del documento acquisisce più volte lo stesso stato, domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd e domComplete devono restituire l'ora della prima ricorrenza di tale stato nel documento corrispondente.",
				"modules-loadEventStart-helptext": "Questo attributo deve restituire l'ora immediatamente precedente a quella in cui l'evento di caricamento del documento corrente venga attivato. Deve restituire zero quando l'evento di caricamento non è ancora stato attivato.",
				"modules-loadEventEnd-helptext": "Questo attributo deve restituire l'ora in cui l'evento di caricamento del documento corrente viene attivato. Deve restituire zero quando l'evento di caricamento non è stato completato.",
				"modules-mobile-events-helptext": "Abilita la ripetizione degli eventi dalle sessioni mobili.",
				"modules-hashchange-helptext": "Se abilitato, questa opzione genera eventi vista schermo quando viene identificato un hashchange nell'URL della pagina. Nei dati della sessione viene inserito un evento vista schermo e gli eventi UI catturati da UI Capture possono essere organizzati sotto la vista schermo in cui si sono verificati.",
				"modules-scroll-winsize-helptext": "NOTA: A seconda dell'applicazione, la traccia dello scorrimento delle finestre può generare un numero significativo di eventi. La ripetizione degli eventi di scorrimento catturati dal client è supportata solo per le sessioni mobili in BBR.",

                "performance-calculateRenderTime": "Calcola il tempo di rendering dei browser che non supportano W3C Navigation Timing",
                "performance-calculateRenderTime-helptext": "Il tempo di rendering viene calcolato misurando la differenza di tempo <br>tra il caricamento della pagina e quello della libreria.",
                "performance-calculateRenderTime-description": "Quando si abilita questa opzione, la libreria calcola il tempo di rendering come differenza tra il proprio tempo di caricamento ed il tempo di caricamento della pagina. Per misurazioni accurate, assicurarsi che la libreria sia caricata al più presto possibile nel ciclo di caricamento della pagina.",
				"performance-renderTimeThreshold": "renderTimeThreshold: ",
				"performance-renderTimeThreshold-helptext": "Il tempo di rendering massimo, in millisecondi. Il valore predefinito è 10 minuti <br>(600000 millisecondi). Qualsiasi tempo di rendering misurato, che superi <br>la soglia, viene riportato come 'invalidRenderTime' e non viene incluso<br> nei report sulle prestazioni del tempo di rendering.",

				"replay-customEventName-placeholder": "Immettere il nome di un singolo evento. Ad es. mousedown",
				"replay-customEventTarget-placeholder": "Immettere un selettore CSS per l'elemento di destinazione.",
				"replay-customEvent": "Evento di ripetizione personalizzato",
				"replay-customEvent-helptext": "Immettere il selettore CSS per il documento O la finestra O l'elemento di destinazione delegato",
				"replay-addCustomDelegate": "Aggiungi un Evento di ripetizione personalizzato",
				"replay-customEvent-name": "Nome evento",
				"replay-customEvent-target": "Destinazione evento",
				"replay-customEvent-name-helptext": "Immettere il nome di un evento in questo punto. Ad es. mousedown",
				"replay-customEvent-target-helptext": "Immettere il selettore CSS per il documento O la finestra O gli elementi di destinazione",
				"replay-customEvent-delegateTarget": "Destinazione del delegato dell'evento (facoltativo)",
				"replay-customEvent-delegateTarget-helptext": "Immettere il selettore CSS per il documento O la finestra O l'elemento di destinazione delegato. Questa impostazione è facoltativa.",
				"replay-customEvent-recurseFrames": "Frame ricorrenti (facoltativo)",
				"replay-customEvent-recurseFrames-helptext": "Se selezionato, applica un listener dell'evento ai frame o gli iframe secondari del documento. Questa impostazione è facoltativa.",
                "replay-customEvent-state": "Stato",
                "replay-customEventState-placeholder": "Immettere la proprietà da utilizzare per l'evento personalizzato",
                "replay-customEvent-state-helptext": "Specifica come è impostato il valore target.currState nel JSON solo negli eventi di ripetizione.",
				"replay-removeCustomEvent": "Rimuovi ripetizione personalizzata",

				"domCapture-header": "DOM Capture",
				"domCapture-enabled": "Abilita DOM Capture",
				"domCapture-enabled-helptext": "AVVERTENZA: l'abilitazione di DOM Capture ha implicazioni significative sull'infrastruttura e la trasmissione dei dati. Per questo motivo, è necessario abilitare questa funzione con molta attenzione. Se abilitata, richiede un'ulteriore configurazione in modo da eseguire la DOM Capture solo in base a specifici elementi ed eventi. Fare riferimento alla documentazione per ulteriori dettagli.",
				"domCapture-captureFrames": "Cattura frame",
				"domCapture-captureFrames-helptext": "Se selezionato i frame e gli iframe saranno catturati. NOTA: è possibile catturare solo il contenuto proveniente dallo stesso dominio della pagina principale.",
				"domCapture-removeScripts": "Rimuovi script",
				"domCapture-removeScripts-helptext": "Se questa opzione è selezionata, tutti i tag degli script verranno rimossi dall'istantanea catturata.",
                "domCapture-diffEnabled": "Abilita DOM Diffs",
                "domCapture-diffEnabled-helptext": "Se questa opzione è selezionata, verranno inviate le differenze DOM dopo l'istantanea DOM completa iniziale. Si consiglia di abilitare questa impostazione.",
                "domCapture-maxLength": "Lunghezza Massima",
                "domCapture-maxLength-helptext": "Se si supera questa soglia, l'istantanea non verrà inviata.",
                "domCapture-maxMutations": "Numero massimo di mutazioni",
                "domCapture-maxMutations-helptext": "Se questa soglia viene raggiunta o superata, viene effettuata un'istantanea DOM completa invece di una differenziale. Utilizzare questa impostazione per ottimizzare nel dettaglio la configurazione della cattura DOM ed definire un limite di sicurezza che impedisca la formazione di colli di bottiglia nelle prestazioni, causati dall'eccessiva elaborazione di mutazioni DOM.",
				"domCapture-subHeader": "Aggiungi trigger DOM Capture",
				"domCapture-trigger": "Trigger",
				"domCapture-addTrigger": "Aggiungi trigger",
				"domCapture-event": "Evento",
				"domCapture-event-helptext": "Gli eventi disponibili sono carica, scarica, fai clic, o modifica.",
				"domCapture-screenview": "Vista schermo",
				"domCapture-addScreenview": "Aggiungi vista schermo",
				"domCapture-removeScreenview": "Rimuovi vista schermo",
				"domCapture-delay": "Ritardo",
				"domCapture-delay-helptext": "Ritardo facoltativo (in millisecondi) dopo cui l'istantanea DOM deve essere acquisita.",
				"domCapture-delay-placeholder": "Immettere un numero",
                "domCapture-fullDOMCapture": "Cattura DOM completa",
                "domCapture-fullDOMCapture-helptext": "Se questa impostazione è selezionata viene acquisita un'istantanea DOM completa di questo trigger.",
				"domCapture-removeTrigger": "Rimuovi trigger",
				"domCapture-addTarget": "Aggiungi destinazione",
				"domCapture-removeTarget": "Rimuovi destinazione",
				"domCapture-target": "Destinazione",
				"domCapture-target-id": "ID",
				"domCapture-target-id-helptext": "ID della destinazione di uno dei tre tipi di ID specificati.",
				"domCapture-target-idType": "Tipo ID",
				"domCapture-target-idType-helptext": "ID HTML, XPath, o ID personalizzato dell'elemento.",
				"domCapture-target-cssSelector": "Selettore CSS",
				"domCapture-target-cssSelector-helptext": "Aggiunge una singola stringa del selettore CSS.",
                "domCapture-load": "carica",
                "domCapture-unload": "scarica",
                "domCapture-click": "fai clic",
                "domCapture-change": "modifica",
                "domCapture-custom": "personalizza",
                "domCapture-custom-eventName": "Nome evento personalizzato:",

                "DCCookie-header": "Cookie & Gestione sessione",
                "DCCookie-enabled": "Abilita modulo DCCookie",
                "DCCookie-enabled-helptext": "Il modulo DCCookie consente la configurazione del cookie di raggruppamento in sessioni e della chiave dell'applicazione. Tali elementi sono richiesti quando si utilizza il servizio Discover SaaS. Per ulteriori informazioni, consultare la documentazione di Discover SaaS.",
                "DCCookie-dcAppKey": "Chiave applicazione",
                "DCCookie-dcAppKey-helptext": "Immettere la chiave dell'applicazione Discover SaaS in questo campo.",
                "DCCookie-sessionCookie": "Nome cookie di raggruppamento in sessioni",
                "DCCookie-sessionCookie-helptext": "Specificare il cookie utilizzato per il raggruppamento in sessioni. Se si specifica <strong>DCXSID</strong> come cookie di raggruppamento in sessioni, UIC creerà il cookie se non esiste.",
                
                "geolocation-header": "Georilevazione",
                "geolocation-enable": "Abilita la registrazione della georilevazione",
                "geolocation-load": "Georilevazione durante l'evento di caricamento",
                "geolocation-load-helptext": "Abilita la registrazione della georilevazione durante l'evento di caricamento",
                "geolocation-helptext": "La registrazione della georilevazione riporta la latitudine, la longitudine e l'approssimazione delle misurazioni se disponibili.",

                "misc-header": "Impostazioni varie",
                "sessionData-options": "Opzioni di condivisione dei dati della sessione",
                "sessionData-Enable": "Condividi dati sessione",
                "sessionData-Enable-description": "La selezione di questa opzione abiliterà la condivisione dei dati della sessione con altri script nella pagina. Fare riferimento alla documentazione per ulteriori dettagli.",
                "sessionData-Enable-helptext": "La selezione di questa opzione abiliterà la condivisione dei dati della sessione con altri script nella pagina. Fare riferimento alla documentazione per ulteriori dettagli.",
                "sessionId-Cookie": "Cookie",
                "sessionId-Cookie-description": "Selezionare questa opzione se si utilizza un cookie per il raggruppamento in sessioni.",
                "sessionId-Cookie-helptext": "Selezionare questa opzione se si utilizza un cookie per il raggruppamento in sessioni.",
                "sessionId-Query": "Parametro query",
                "sessionId-Query-description": "Selezionare questa opzione se si utilizza un parametro della query per il raggruppamento in sessioni.",
                "sessionId-Query-helptext": "Selezionare questa opzione se si utilizza un parametro della query per il raggruppamento in sessioni.",
                "sessionId-Cookie-Name": "Nome cookie",
                "sessionId-Cookie-Name-helptext": "Il nome del cookie utilizzato per il raggruppamento in sessioni. Ad esempio, DCXSID, jsessionid e così via.",
                "sessionId-Query-Name": "Nome parametro query",
                "sessionId-Query-Name-helptext": "Il nome (ossia LHS) del parametro della query utilizzato per il raggruppamento in sessioni.",
                "sessionId-Query-Delimiter": "Delimitatore della stringa di query",
                "sessionId-Query-Delimiter-helptext": "Specifica il delimitatore della stringa di query utilizzato dall'applicazione. Il valore predefinito è &",
                "sessionId-ValueNeedsHashing": "Il valore necessita di hashing",
                "sessionId-ValueNeedsHashingDescription": "Selezionare questo opzione se il valore necessita di hashing per derivare l'ID della sessione.",
                "misc-frames-blacklist-label": "Frame nella blacklist",
                "misc-frames-blacklist-helptext": "Selettori CSS dei frame esclusi dalla raccolta dati.",
                "misc-frames-blacklist-placeholder": "Selettori CSS separati da spazio virgola spazio.",

                "regextester-headline": "Verifica delle espressioni regolari",
                "regextester-regex": "RegEx",
                "regextester-flag-i": "Non sensibile alle maiuscole/minuscole (i)",
                "regextester-flag-g": "Globale (g)",
                "regextester-sample": "Campione di test",
                "regextester-matches": "Corrispondenze?",
                "regextester-copylabel": "(pronto per copia&incolla in config)",
                "regextester-btn-test": "Test",

                "unsupported-header": "Il browser utilizzato e troppo vecchio o non supportato.",
                "unsupported-sudHeader": "Utilizzare uno dei seguenti browser:",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "(Versione 17.0 e successive)",
                "unsupported-safari-versioninfo": "(Versione 6.0 e successive)",

                "validation-timerinterval": "L'intervallo del timer non è valido. Immettere un numero compreso tra 1000 e 600000.",
                "validation-maxevents": "Dimensione (numero massimo di messaggi) non valida. Immettere un numero compreso tra 1 e 100.",
                "validation-renderTimeThreshold": "La soglia del tempo rendering non è valida, immettere un numero.",
                "validation-maxSize": "Dimensione (lunghezza massima serializzata) non valida. Immettere un numero compreso tra 4000 e 1000000.",

                "reload-page": "Ricaricare la pagina perché il cambiamento di lingua abbia effetto."
            }

,
            ja: // NLS_CHARSET=UTF-8
{
                "site-title": "UIC 構成ウィザード",
                "page-headline": "UIC 構成ウィザード",
				"uic-version": "UIC バージョン ",
                "advanced-options": "拡張オプション",
                "btn-prev": "戻る",
                "btn-next": "次へ",
                "btn-finish": "終了",
                "btn-reset": "デフォルトにリセット",
                "btn-regextester": "正規表現テスター",

                "library-type-prod-min": "実動ビルド (縮小済み)",
                "library-type-prod": "実動ビルド (非縮小)",
                "library-type-dev": "開発ビルド (非縮小)",

                "core-inactivityTimeout": "非アクティブ・タイムアウト (ミリ秒)",
                "core-inactivityTimeout-helptext": "非アクティブ・タイムアウトは、所定の期間にユーザー・アクティビティーがなかった場合に UIC が自己終了するタイムアウト値を表します。 " +
                                                   "非アクティブ・タイムアウト値を指定しなかった場合、組み込みのタイムアウト値の 10 分が使用されます。 " +
                                                   "<br /><em>注:</em> タイムアウト値 0 を指定すると、この機能が無効になります。 この設定は、孤立した UI ヒットを招く可能性があるため、お勧めしません。",

                "browserService-header": "ブラウザー・サービス構成",
                "browserService-subHeader": "フレーバーの選択:",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "jQuery フレーバーがサポートされるのは、Web アプリケーションで jQuery 1.7 以上を使用している場合のみです。",
                "browserService-jQuery-description": "UIC ライブラリーの jQuery フレーバーでは、クロスブラウザー DOM アクセス用に jQuery API を使用します。",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "それ以外のすべてのユーザー。",
                "browserService-w3c-description": "UIC ライブラリーの W3C フレーバーでは、ブラウザー DOM API を直接使用します。" +
                                                  "<br /><em>注:</em> W3C フレーバーでは、サード・パーティーの Sizzle JS ライブラリーも組み込む必要があります。 拡張オプションの Sizzle URL セクションを参照してください。",

                "browserService-useCapture": "イベントの listen にキャプチャー・フェーズを使用",
                "browserService-useCapture-helptext": "イベント・リスナーの登録時にイベント・キャプチャー・フェーズを有効にします。 無効にした場合、イベントのバブルが使用されます。その場合、一部のイベントのバブルが妨げられると、それらのイベントを見逃すおそれがあります。 この設定を有効にすることをお勧めします。" +
                                                      "<br /><em>注:</em> 古いバージョンの Internet Explorer (IE 8 以前) では、イベント・キャプチャー・フェーズはサポートされていないため、自動的に、イベントのバブルの使用に戻ります。" +
                                                      "<br />この設定の追加の詳細については、W3C の DOM 仕様 (http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture) を参照してください。",
                "browserService-sizzleObject": "Sizzle オブジェクト",
                "browserService-sizzleObject-helptext": "Sizzle オブジェクトへのパス。 スキップした場合、デフォルトで window.Sizzle が使用されます。" +
                                                        "<br /><br /><em>注:</em> W3C サービスの使用時に古いバージョンの Internet Explorer (IE 8 以前) でライブラリーが正しく動作するためには、Sizzle が必要です。" +
                                                        " アプリケーションで任意のバージョンの jQuery を使用している場合、個別の Sizzle インクルードは必要ありません。jQuery には既に Sizzle が含まれています。" +
                                                        " Sizzle は http://sizzlejs.com/ から入手できます",
                "browserService-jQueryObject": "jQuery オブジェクト",
                "browserService-jQueryObject-helptext": "jQuery オブジェクトへのパス。 スキップした場合、デフォルトで window.jQuery が使用されます。",
                "browserService-blacklistedElements": "ブラックリスト・エレメント",
                "browserService-blacklistedElements-placeholder": "スペース・コンマ・スペースで区切られた ID または正規表現。",
                "browserService-blacklistedElements-helptext": "固有でないか動的に生成されない (またはその両方の) エレメント ID をブラックリストに入れます。 ブラックリストに入れられた項目のいずれかに一致するエレメント ID は、カスタム属性値または XPath に置き換えられます。" +
                                                               "<br /><br />ヒント: ブラックリストの構成に使用する正規表現を検証するには、正規表現テスターを使用します。",
                "browserService-customID": "カスタム属性 ID",
                "browserService-customID-placeholder": "属性名。",
                "browserService-customID-helptext": "エレメントの HTML ID が使用可能でなく、またブラックリストにも入れられていない場合に、エレメントを一意的に識別するために使用できる 1 つ以上の属性。",
				"browserService-ieExcludedLinks": "Internet Explorer 除外リンク",
				"browserService-ieExcludedLinks-placeholder": "コンマで区切られた CSS セレクター。",
				"browserService-ieExcludedLinks-helptext": "この構成は、CSS セレクターの配列として指定されます。 例えば、構成を以下のように指定します。 " +
															" a[href^='javascript:'] " +
															"こうすると、次のリンクにより起動される beforeunload が無視されます。< a href='javascript:void(0);'>クリック< /a>" +
															"<br/>注: 無効文字 (例: $) が指定され、\\ で正しくエスケープされていない場合、Chrome および Webkit ブラウザーで例外が発生します。",
                "queueService-header": "キュー・サービス構成",
                "queueService-subHeader": "ライブラリーの内部キューの構成",
                "queueService-queueName": "名前",
                "queueService-queueName-helptext": "このリリースでは、1 つのキューのみがサポートされます。 キュー名は「DEFAULT」でなければなりません。 この値を変更しないでください。",
                "queueService-queueEndpoint": "エンドポイント (ターゲット・ページ)",
                "queueService-queueEndpoint-helptext": "キャプチャーされたデータが POST される Web サーバーのターゲット・ページ URL。 このリリースではクロスドメイン URL はサポートされません。",
                "queueService-queueSize-events": "サイズ (最大メッセージ数)",
                "queueService-queueSize-events-helptext": "キューがフラッシュされるしきい値。 推奨値: 1 から 50 (テスト)、20 から 50 (実動デプロイメント)。",
                "queueService-queueSize-serialized": "サイズ (シリアライズの最大長)",
                "queueService-queueSize-serialized-helptext": "シリアライズ・キューの長さのしきい値。この値を超えるとキューがフラッシュされます。 推奨値: 8000 から 20000 (実動デプロイメントの場合)。" +
                                                    "<br/>注: gzip エンコードを使用中の場合は、事前エンコード・サイズ制限を反映するためにこの値を増やす必要があります。" +
                                                    "<br/>警告: この設定を有効にすると、パフォーマンスに影響が及ぶ場合があります。しきい値をチェックするためにキューのシリアライズに依存することがその理由です。",
                "queueService-queueSize-serialized-label": " (値 0 を指定すると、この設定は無効になります)",
                "queueService-queueTimer": "タイマーの間隔 (ミリ秒)",
                "queueService-queueTimer-label": " ミリ秒 (値 0 を指定すると、このタイマーは無効になります)",
                "queueService-queueTimer-helptext": "シャドー・ブラウズ・シナリオを使用可能にするために、メッセージの数に関係なく一定間隔でキューをフラッシュするようにタイマー値を設定できます。 それ以外のほとんどの場合では、この設定は無効のままにしておくことをお勧めします。",

                "queueService-crossDomainEnabled": "クロスドメイン POST メッセージを有効にする。",
                "queueService-crossDomainFrameSelector": "クロスドメイン・フレーム・セレクター",
                "queueService-crossDomainFrameSelector-helptext": "クロスドメイン・フレーム・セレクターでは、要求を POST するように構成されたページの iframe または frame エレメントを指定する必要があります。",

				"queueService-asyncReqOnUnload": "ページのアンロードで非同期 XHR を有効にする。",
				"queueService-asyncReqOnUnload-helptext": "ページのアンロード中の非同期要求を有効にするにはこのオプションにチェック・マークを付けます。<br />警告: ページのアンロード時の非同期要求を有効にすると、不完全なデータや欠落データが発生することがあります。",

                "queueService-checkEndpoint": "エンドポイントの検査",
                "queueService-checkEndpoint-helptext": "Discover エンドポイントが使用可能かどうかを検査するために非同期要求を送信します。",
                "queueService-endpointCheckTimeout": "エンドポイントの検査のタイムアウト",
                "queueService-endpointCheckTimeout-helptext": "Discover エンドポイントが使用可能かどうかを検査する非同期要求のタイムアウト。",

                "queueService-queueSerializer": "シリアライザー",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "JSON シリアライゼーションのみがサポートされています。",
                "queueService-addQueue": "別のキューを追加",

                "messageService-header": "メッセージ・サービス構成",
                "messageService-subHeader": "プライバシー・マスキング構成",
                "messageService-targets": "ターゲット",
                "messageService-id": "ID",
                "messageService-id-helptext": "マスクする必要があるエレメントの HTML ID、XPath、またはカスタム属性 ID ('attrName=attrValue')。",
                "messageService-idType": "ID タイプ",
                "messageService-idType--1": "HTML ID",
                "messageService-idType--2": "xPath",
                "messageService-idType--3": "カスタム属性 ID",
                "messageService-idType-helptext": "正しい ID タイプを選択します。",
                "messageService-addTarget": "別のターゲットを追加",
                "messageService-maskType": "マスク・タイプ",
                "messageService-maskType-1": "空",
                "messageService-maskType-2": "基本",
                "messageService-maskType-3": "タイプ",
                "messageService-maskType-4": "カスタム",
                "messageService-maskType-helptext": "マスク・タイプは、値の変換方法を定義します。" +
                                                    "<dl>" +
                                                        "<dt><b>空:</b></dt>" +
                                                        "<dd>値は空ストリングに設定されます。</dd>" +
                                                        "<dt><b>基本:</b></dt>" +
                                                        "<dd>値は固定ストリング「XXXXX」で置換されます。</dd>" +
                                                        "<dt><b>タイプ:</b></dt>" +
                                                        "<dd>" +
                                                            "値は以下のようにマスクで置換されます。" +
                                                            "<ul>" +
                                                                "<li>小文字は「x」で置換されます</li>" +
                                                                "<li>大文字は「X」で置換されます</li>" +
                                                                "<li>数値は「9」で置換されます</li>" +
                                                                "<li>記号は「@」で置換されます</li>" +
                                                            "</ul>" +
                                                            "したがって、ストリング「HelloWorld123」は「XxxxxXxxxx999」になります。" +
                                                        "</dd>" +
                                                        "<dt><b>カスタム:</b></dt>" +
                                                        "<dd>値はカスタム関数の戻り値で置換されます。カスタム関数は「マスク関数」テキスト・ボックス内に記述する必要があります。</dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "マスク関数",
                "messageService-maskFunction-helptext": "マスクされていないストリングを受け取り、マスクされた値を返す JavaScript 関数。",
                "messageService-addConfiguration": "プライバシー構成の追加",
				"messageService-cssSelector": "CSS セレクター",
				"messageService-cssSelector-helptext": "単一 CSS セレクター・ストリングの追加",
				"services-message-privacy-cssSelector-placeholder": "ここに CSS セレクター・ストリングを追加",
				"messageService-removePrivacyConfigurationTarget": "ターゲットの削除",
				"messageService-removePrivacyConfiguration": "プライバシー構成の削除",

                "serializer-header": "シリアライザー・サービス構成",
                "serializer-defaultToBuiltin": "使用可能なものがない場合は標準装備パーサー/シリアライザーを使用",
                "serializer-defaultToBuiltin-helptext": "UIC には、JSON パーサー/シリアライザーの独自の基本実装が備わっています。 JSON パーサー/シリアライザーは、以下のようにして選択されます。<br />" +
                                                        "<ol>" +
                                                          "<li>JSON パーサー/シリアライザーが以下の構成に明示的に指定されている場合、UIC はそれを使用します。" +
                                                          "<li>JSON パーサー/シリアライザーが以下の構成に明示的に指定されていない場合、UIC は、ブラウザーが JSON をネイティブ・サポートしているかどうかを検査します。" +
                                                          "<li>ブラウザーがネイティブで JSON をサポートしていない場合にこのチェック・ボックスが選択されていると、UIC は、それ自体が持つ JSON の基本実装を使用します。" +
                                                          "<li>上記のいずれにも該当しない場合、UIC は何も出力せずに失敗します。" +
                                                        "</ol>",
                "serializer-parsers": "パーサー",
                "serializer-parsers-helptext": "このリストには、UIC が使用する必要があるパーサー関数 (例えば JSON.parse) が含まれます。 最初の関数が最も重要なものです。 UIC がこれを検出しない場合、それ以降の関数 (指定されている場合) が順番に試行されます。",
                "serializer-parser": "パーサー",
                "serializer-addParser": "別のパーサーを追加",
                "serializer-stringifiers": "シリアライザー",
                "serializer-stringifiers-helptext": "このリストには、UIC が使用する必要があるシリアライザー関数 (例えば JSON.stringify) が含まれます。 最初の関数が最も重要なものです。 UIC がこれを検出しない場合、それ以降の関数 (指定されている場合) が順番に試行されます。",
                "serializer-stringifier": "シリアライザー",
                "serializer-addStringifier": "別のシリアライザーを追加",

				"encoder-header": "エンコーダー・サービス構成",
				"encoder": "エンコーダー",
				"encoder-enable": "有効化",
                "encoder-enable-helptext": "UIC が gzip 圧縮を要求データに適用できるようにするには、このサービスを有効にします。 エンコーダー・サービスは、UIC が初期化される前にページに組み込まれて初期化される「pako」オープン・ソース・ライブラリーに依存することに注意してください。 「pako」の詳細とダウンロードについては、https://github.com/nodeca/pako を参照してください。",
				"encoder-encode": "エンコード",
				"encoder-defaultEncoding": "デフォルト・エンコード",
				"encoder-helptext": "圧縮エンコーダー・サービスを構成します。 デフォルトでは、gzip が構成されています。",
				"encoder-defaultEncoding-helptext": "UIC により HTTP 要求ヘッダー内に指定されるエンコード・タイプ。 デフォルトは「Content-encoding: gzip」です。",
				"encoder-encode-helptext": "エンコーダーのパス。 デフォルトは「window.pako.gzip」です。",

                "modules-header": "モジュール",
                "modules-subHeader": "使用可能モジュールの選択",
                "modules-performance": "パフォーマンス",
                "modules-performance-helptext": "W3C Navigation Timing プロパティー",
                "modules-PerformanceSettings": "パフォーマンス設定",
                "modules-replay": "再生",
                "modules-replay-helptext": "再生、ユーザビリティー、およびステップ・ベースのイベント処理を有効にするためのユーザー対話のモニター。",
				"modules-usability": "Usability",
				"modules-usability-helptext": "マウスアウト、マウス移動、およびクリックの各 Usability イベントを構成に追加します。",
                "modules-moduleBaseURL": "moduleBase URL:",
                "modules-moduleBaseURL-helptext": "モジュールを動的にロードできる、サーバー上のロード元の場所。 このオプションは現行リリースでは使用されません。",
                "modules-replay-events": "イベントの再生",
                "modules-hover-tracking": "ポインター移動トラッキングの有効化",
                "modules-mobile-events": "モバイル・イベントの有効化",
                "modules-hashchange": "hashchange からの ScreenView の有効化",
                "modules-scroll-winsize": "スクロールとウィンドウ・サイズのトラッキングの有効化",
				"modules-navigationStart-helptext": "この属性は、ユーザー・エージェントが直前の文書のアンロードに対するプロンプトを終了した直後の時刻を返さなければなりません。 直前の文書がない場合、この属性は fetchStart と同じ値を返す必要があります。",
				"modules-unloadEventStart-helptext": "直前の文書と現行文書の発信元 [IETF RFC 6454] が同じ場合、この属性は、ユーザー・エージェントが直前の文書のアンロード・イベントを開始する直前の時刻を返さなければなりません。 直前の文書がない場合、または直前の文書の生成元が現行文書とは異なる場合、この属性はゼロを返す必要があります。",
				"modules-unloadEventEnd-helptext": "直前の文書と現行文書の発信元が同じ場合、この属性は、ユーザー・エージェントが直前の文書のアンロード・イベントを終了した直後の時刻を返さなければなりません。 直前の文書がない場合、直前の文書の生成元が現行文書とは異なる場合、またはアンロードがまだ完了していない場合、この属性はゼロを返す必要があります。 ナビゲート中に HTTP リダイレクトまたはそれと同等のものが存在し、かつすべてのリダイレクトまたはそれと同等のものが同一の発信元からのものでない場合、unloadEventStart と unloadEventEnd はいずれもゼロを返す必要があります。",
				"modules-redirectStart-helptext": "ナビゲート中に HTTP リダイレクトまたはそれと同等のものが存在し、かつすべてのリダイレクトまたはそれと同等のものが同一の発信元からのものである場合、この属性は、そのリダイレクトを開始したフェッチの開始時刻を返す必要があります。 それ以外の場合、この属性はゼロを返さなければなりません。",
				"modules-redirectEnd-helptext": "ナビゲート中に HTTP リダイレクトまたはそれと同等のものが存在し、かつすべてのリダイレクトまたはそれと同等のものが同一の発信元からのものである場合、この属性は、最後のリダイレクトの応答の最終バイトを受信した直後の時刻を返さなければなりません。 それ以外の場合、この属性はゼロを返さなければなりません。",
				"modules-fetchStart-helptext": "新規リソースを HTTP GET またはそれと同等のものを使用してフェッチする場合、fetchStart は、ユーザー・エージェントが関連するアプリケーション・キャッシュの検査を開始する直前の時刻を返されなければなりません。 それ以外の場合、ユーザー・エージェントがリソースのフェッチを開始した時刻を返す必要があります。",
				"modules-domainLookupStart-helptext": "この属性は、ユーザー・エージェントが現行文書のドメイン・ネーム検索を開始する直前の時刻を返す必要があります。 持続接続 [RFC 2616] が使用される場合、または現行文書が関連アプリケーション・キャッシュまたはローカル・リソースから取得される場合、この属性は fetchStart と同じ値を返す必要があります。",
				"modules-domainLookupEnd-helptext": "この属性は、ユーザー・エージェントが現行文書のドメイン・ネーム検索を終了した直後の時刻を返す必要があります。 持続接続 [RFC 2616] が使用される場合、または現行文書が関連アプリケーション・キャッシュまたはローカル・リソースから取得される場合、この属性は fetchStart と同じ値を返す必要があります。",
				"modules-connectStart-helptext": "この属性は、ユーザー・エージェントが文書を取得するためにサーバーへの接続の確立を開始する直前の時刻を返す必要があります。 持続接続 [RFC 2616] が使用される場合、または現行文書が関連アプリケーション・キャッシュまたはローカル・リソースから取得される場合、この属性は domainLookupEnd の値を返す必要があります。",
				"modules-connectEnd-helptext": "この属性は、ユーザー・エージェントが現行文書を取得するためのサーバーへの接続の確立を終了した直後の時刻を返す必要があります。 持続接続 [RFC 2616] が使用される場合、または現行文書が関連アプリケーション・キャッシュまたはローカル・リソースから取得される場合、この属性は domainLookupEnd の値を返す必要があります。 トランスポート接続が失敗し、ユーザー・エージェントが接続を再オープンした場合、connectStart と connectEnd は、新規接続についての対応する値を返す必要があります。 connectEnd には、トランスポート接続を確立するための時間間隔に加えて、SSL ハンドシェークや SOCKS 認証などの時間間隔も含める必要があります。",
				"modules-secureConnectionStart-helptext": "この属性はオプションです。 この属性が使用可能でないユーザー・エージェントは、属性を未定義に設定する必要があります。 この属性が使用可能であり、現行ページのスキームが HTTPS の場合、この属性は、ユーザー・エージェントが現行接続を保護するためにハンドシェーク・プロセスを開始する直前の時刻を返す必要があります。 この属性が使用可能だが HTTPS が使用されていない場合、この属性はゼロを返さなければなりません。",
				"modules-requestStart-helptext": "この属性は、ユーザー・エージェントが、サーバー、関連アプリケーション・キャッシュ、またはローカル・リソースから現行文書の要求を開始する直前の時刻を返す必要があります。 要求の送信後にトランスポート接続が失敗し、ユーザー・エージェントが接続を再オープンして要求を再送信した場合、requestStart は、新規要求の対応する値を返す必要があります。",
				"modules-responseStart-helptext": "この属性は、サーバー、関連するアプリケーション・キャッシュ、またはローカル・リソースからの応答の先頭バイトをユーザー・エージェントが受け取った直後の時刻を返す必要があります。",
				"modules-responseEnd-helptext": "この属性は、ユーザー・エージェントが現行文書の最終バイトを受け取った直後、またはトランスポート接続が閉じる直前のいずれかの早い方の時刻を返す必要があります。 この文書は、サーバー、関連アプリケーション・キャッシュ、またはローカル・リソースのいずれかから受信できます。",
				"modules-domLoading-helptext": "この属性は、ユーザー・エージェントが現行文書の作動可能状況を「ロード中」に設定する直前の時刻を返す必要があります。",
				"modules-domInteractive-helptext": "この属性は、ユーザー・エージェントが現行文書の作動可能状況を「インタラクティブ」に設定する直前の時刻を返す必要があります。",
				"modules-domContentLoadedEventStart-helptext": "この属性は、ユーザー・エージェントが文書に対する DOMContentLoaded イベントを開始する直前の時刻を返す必要があります。",
				"modules-domContentLoadedEventEnd-helptext": "この属性は、文書の DOMContentLoaded イベントが完了した直後の時刻を返す必要があります。",
				"modules-domComplete-helptext": "この属性は、ユーザー・エージェントが現行文書の作動可能状況を「完了」に設定する直前の時刻を返す必要があります。 現行文書の作動可能状況が、複数回同じ状況に変更された場合、domLoading、domInteractive、domContentLoadedEventStart、domContentLoadedEventEnd、および domComplete は、対応する文書の作業可能状況の変更のうちの最初の発生時刻を返す必要があります。",
				"modules-loadEventStart-helptext": "この属性は、現行文書のロード・イベントが開始される直前の時刻を返す必要があります。 ロード・イベントがまだ開始されていない場合は、ゼロを返す必要があります。",
				"modules-loadEventEnd-helptext": "この属性は、現行文書のロード・イベントの完了時刻を返す必要があります。 ロード・イベントが開始されていない場合、または完了していない場合は、ゼロを返す必要があります。",
				"modules-mobile-events-helptext": "モバイル・セッションのイベントの再生を有効にします。",
				"modules-hashchange-helptext": "このオプションを有効にすると、ページの URL 内に hashchange が識別された場合に、ScreenView イベントが生成されます。 セッション・データに ScreenView イベントが挿入され、UI Capture によりキャプチャーされた UI イベントを、それらが発生した ScreenView の下に編成できます。",
				"modules-scroll-winsize-helptext": "注: アプリケーションによっては、ウィンドウ・スクロールのトラッキングにより大量のイベントが生成される場合があります。 クライアントからキャプチャーされたスクロール・イベントの再生は、BBR でのモバイル・セッションに対してのみサポートされます。",

                "performance-calculateRenderTime": "W3C Navigation Timing をサポートしないブラウザーのレンダリング時間の計算",
                "performance-calculateRenderTime-helptext": "レンダリング時間は、ページ・ロードとライブラリー・ロードの<br>時間の差を測定することにより計算されます。",
                "performance-calculateRenderTime-description": "この設定を有効にすると、ライブラリーでは、ライブラリーのロード時間とページのロード時間の差としてレンダリング時間が計算されます。 計測を正確にするためには、ページ・ロード・サイクル内でライブラリーが可能な限り早くロードされるようにしてください。",
				"performance-renderTimeThreshold": "レンダリング時間しきい値: ",
				"performance-renderTimeThreshold-helptext": "最大レンダリング時間 (ミリ秒)。 デフォルトは 10 分<br>(600000 ミリ秒) です。 このしきい値を超える測定レンダリング時間は<br>すべて 'invalidRenderTime' として報告され、<br>レンダリング時間パフォーマンス・レポートには含まれません。",

				"replay-customEventName-placeholder": "単一イベント名 (例: mousedown) を入力します",
				"replay-customEventTarget-placeholder": "ターゲット・エレメント用の CSS セレクターを入力します。",
				"replay-customEvent": "カスタム再生イベント",
				"replay-customEvent-helptext": "代行ターゲット・エレメント、文書、またはウィンドウ用の CSS セレクターを入力します",
				"replay-addCustomDelegate": "カスタム再生イベントの追加",
				"replay-customEvent-name": "イベント名",
				"replay-customEvent-target": "イベント・ターゲット",
				"replay-customEvent-name-helptext": "イベント名 (例: mousedown) を入力します",
				"replay-customEvent-target-helptext": "ターゲット・エレメント、文書、またはウィンドウ用の CSS セレクターを入力します",
				"replay-customEvent-delegateTarget": "イベント代行ターゲット (オプション)",
				"replay-customEvent-delegateTarget-helptext": "代行ターゲット・エレメント、文書、またはウィンドウ用の CSS セレクターを入力します。 この設定はオプションです。",
				"replay-customEvent-recurseFrames": "フレームの再帰処理 (オプション)",
				"replay-customEvent-recurseFrames-helptext": "チェック・マークを付けた場合、文書の子 frame/iframe にイベントのリスナーを適用します。 この設定はオプションです。",
                "replay-customEvent-state": "状態",
                "replay-customEventState-placeholder": "カスタム・イベントの状態として使用するプロパティーを入力します",
                "replay-customEvent-state-helptext": "カスタム再生イベントの場合にのみ、JSON にどのように target.currState 値を設定するかを指定します。",
				"replay-removeCustomEvent": "カスタム再生の削除",

				"domCapture-header": "DOM キャプチャー",
				"domCapture-enabled": "DOM キャプチャーの有効化",
				"domCapture-enabled-helptext": "警告: DOM キャプチャーを有効にすると、データ伝送とインフラストラクチャーに重大な影響が及びます。 そのため、この機能は適切な判断の下で有効にする必要があります。 有効にした場合、特定のイベントとエレメントに基づいて DOM キャプチャーを実行するためだけに追加の構成が必要になります。 詳しくは、資料を参照してください。",
				"domCapture-captureFrames": "フレームのキャプチャー",
				"domCapture-captureFrames-helptext": "チェック・マークを付けると、子 frame および子 iframe がキャプチャーされます。 注: 親ページ自体と同じドメインをソースとするコンテンツのみをキャプチャーできます。",
				"domCapture-removeScripts": "スクリプトの削除",
				"domCapture-removeScripts-helptext": "チェック・マークを付けると、キャプチャーされたスナップショットからすべての script タグが削除されます。",
                "domCapture-diffEnabled": "DOM 差分の有効化",
                "domCapture-diffEnabled-helptext": "チェック・マークを付けると、初回の完全な DOM スナップショットの後に DOM 差分が送信されます。 この設定を有効にすることをお勧めします。",
                "domCapture-maxLength": "最大長",
                "domCapture-maxLength-helptext": "このしきい値を超過する場合、スナップショットは送信されません。",
                "domCapture-maxMutations": "変形の最大数",
                "domCapture-maxMutations-helptext": "このしきい値に達するか、これを超えた場合、差分ではなく、完全な DOM スナップショットが取られます。 DOM キャプチャーの構成を微調整し、過剰な DOM 変形の処理によるパフォーマンス・ボトルネックを防ぐ安全制限を設定するには、この設定を使用します。",
				"domCapture-subHeader": "DOM キャプチャー・トリガーの追加",
				"domCapture-trigger": "トリガー",
				"domCapture-addTrigger": "トリガーの追加",
				"domCapture-event": "イベント",
				"domCapture-event-helptext": "使用可能なイベントは、ロード、アンロード、クリック、または変更です。",
				"domCapture-screenview": "ScreenView",
				"domCapture-addScreenview": "ScreenView の追加",
				"domCapture-removeScreenview": "ScreenView の削除",
				"domCapture-delay": "遅延",
				"domCapture-delay-helptext": "DOM スナップショットを取得する際のオプションの遅延 (ミリ秒単位)。",
				"domCapture-delay-placeholder": "数値を入力してください",
                "domCapture-fullDOMCapture": "完全な DOM キャプチャー",
                "domCapture-fullDOMCapture-helptext": "チェックマークを付けると、このトリガーの場合に完全な DOM スナップショットが取られます。",
				"domCapture-removeTrigger": "トリガーの削除",
				"domCapture-addTarget": "ターゲットの追加",
				"domCapture-removeTarget": "ターゲットの削除",
				"domCapture-target": "ターゲット",
				"domCapture-target-id": "ID",
				"domCapture-target-id-helptext": "3 つの ID タイプにより指定されるターゲットの ID。",
				"domCapture-target-idType": "ID タイプ",
				"domCapture-target-idType-helptext": "エレメントの HTML ID、XPath、またはカスタム ID。",
				"domCapture-target-cssSelector": "CSS セレクター",
				"domCapture-target-cssSelector-helptext": "単一 CSS セレクター・ストリングの追加。",
                "domCapture-load": "ロード",
                "domCapture-unload": "アンロード",
                "domCapture-click": "クリック",
                "domCapture-change": "変更",
                "domCapture-custom": "カスタム",
                "domCapture-custom-eventName": "カスタム・イベント名:",

                "DCCookie-header": "Cookie & セッション管理",
                "DCCookie-enabled": "DCCookie モジュールの有効化",
                "DCCookie-enabled-helptext": "DCCookie モジュールでは、アプリケーション・キーおよびセッション化 Cookie の構成が許可されます。 これらは、Discover SaaS サービスを使用する際に必須になります。 追加情報については、Discover SaaS の資料を参照してください。",
                "DCCookie-dcAppKey": "アプリケーション・キー",
                "DCCookie-dcAppKey-helptext": "Discover SaaS アプリケーション・キーをこのフィールドに入力します。",
                "DCCookie-sessionCookie": "セッション化 Cookie 名",
                "DCCookie-sessionCookie-helptext": "セッション化に使用している Cookie を指定します。 セッション化 Cookie として <strong>DCXSID</strong> を指定すると、その Cookie がまだ存在しない場合は、UIC がその Cookieを作成します。",
                
                "geolocation-header": "地理位置情報",
                "geolocation-enable": "地理位置情報ロギングの有効化",
                "geolocation-load": "ロード・イベント中の地理位置情報",
                "geolocation-load-helptext": "ロード・イベント中の地理位置情報ロギングを有効にします",
                "geolocation-helptext": "地理位置情報ロギングでは、緯度、経度、および計測の正確性が報告されます (使用可能な場合)。",

                "misc-header": "その他の設定",
                "sessionData-options": "セッション・データ共有オプション",
                "sessionData-Enable": "セッション・データの共有",
                "sessionData-Enable-description": "このオプションを選択すると、セッション・データをページ上の他のスクリプトと共有できます。 詳しくは、資料を参照してください。",
                "sessionData-Enable-helptext": "このオプションを選択すると、セッション・データをページ上の他のスクリプトと共有できます。 詳しくは、資料を参照してください。",
                "sessionId-Cookie": "Cookie",
                "sessionId-Cookie-description": "セッション化に Cookie を使用する場合は、このオプションを選択します。",
                "sessionId-Cookie-helptext": "セッション化に Cookie を使用する場合は、このオプションを選択します。",
                "sessionId-Query": "照会パラメーター",
                "sessionId-Query-description": "セッション化に照会パラメーターを使用する場合は、このオプションを選択します。",
                "sessionId-Query-helptext": "セッション化に照会パラメーターを使用する場合は、このオプションを選択します。",
                "sessionId-Cookie-Name": "Cookie 名",
                "sessionId-Cookie-Name-helptext": "セッション化に使用する Cookie の名前。 例えば、DCXSID や jsessionid。",
                "sessionId-Query-Name": "照会パラメーター名",
                "sessionId-Query-Name-helptext": "セッション化に使用する照会パラメーターの名前 (LHS)。",
                "sessionId-Query-Delimiter": "照会ストリング区切り文字",
                "sessionId-Query-Delimiter-helptext": "アプリケーションで使用される照会ストリング区切り文字を指定します。 デフォルトは & です。",
                "sessionId-ValueNeedsHashing": "値のハッシュが必要",
                "sessionId-ValueNeedsHashingDescription": "セッション ID を導き出すために値のハッシュが必要な場合はこのオプションを選択します。",
                "misc-frames-blacklist-label": "ブラックリスト・フレーム",
                "misc-frames-blacklist-helptext": "データ収集から除外するフレームの CSS セレクター。",
                "misc-frames-blacklist-placeholder": "スペース・コンマ・スペースで区切られた CSS セレクター。",

                "regextester-headline": "正規表現のテスト",
                "regextester-regex": "正規表現",
                "regextester-flag-i": "大/小文字を区別しない (i)",
                "regextester-flag-g": "グローバル (g)",
                "regextester-sample": "テスト・サンプル",
                "regextester-matches": "次と一致する",
                "regextester-copylabel": "(構成へのコピー & ペーストが準備完了)",
                "regextester-btn-test": "テスト",

                "unsupported-header": "ブラウザーが古すぎるか、またはサポートされていません。",
                "unsupported-sudHeader": "以下のいずれかのブラウザーを使用してください。",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "(バージョン 17.0 以上)",
                "unsupported-safari-versioninfo": "(バージョン 6.0 以上)",

                "validation-timerinterval": "タイマーの間隔が無効です。 1000 から 600000 までの数値を入力してください。",
                "validation-maxevents": "サイズ (最大メッセージ数) が無効です。 1 から 100 までの数値を入力してください。",
                "validation-renderTimeThreshold": "レンダリング時間しきい値が無効です。数値を入力してください。",
                "validation-maxSize": "サイズ (シリアライズの最大長) が無効です。 4000 から 1000000 までの数値を入力してください。",

                "reload-page": "言語の変更を反映するためにページを再ロードしてください。"
            }

,
            ko: // NLS_CHARSET=UTF-8
{
                "site-title": "UIC 구성 마법사",
                "page-headline": "UIC 구성 마법사",
				"uic-version": "UIC 버전 ",
                "advanced-options": "고급 옵션",
                "btn-prev": "이전",
                "btn-next": "다음",
                "btn-finish": "완료",
                "btn-reset": "기본값으로 다시 설정",
                "btn-regextester": "RegEx 테스터",

                "library-type-prod-min": "프로덕션 빌드(축소됨)",
                "library-type-prod": "프로덕션 빌드(축소되지 않음)",
                "library-type-dev": "개발 빌드(축소되지 않음)",

                "core-inactivityTimeout": "비활성 제한시간(밀리초)",
                "core-inactivityTimeout-helptext": "비활성 제한시간은 이 시간 동안 사용자 활동이 없는 경우 UIC가 자체 종료되는 제한시간 값을 지정합니다." +
                                                   "비활성 제한시간 값이 지정되지 않으면 기본 제공 제한시간 값인 10분이 사용됩니다. " +
                                                   "<br /><em>참고:</em> 제한시간 값을 0으로 설정하면 이 기능이 사용 안함으로 설정됩니다. 이로 인해 사용되지 않는 UI 적중이 발생할 수 있으므로 권장되지 않습니다.",

                "browserService-header": "브라우저 서비스 구성",
                "browserService-subHeader": "플레이버 선택:",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "jQuery 플레이버는 웹 앱이 jQuery 1.7 이상을 사용하는 경우에만 지원됩니다.",
                "browserService-jQuery-description": "UIC 라이브러리의 jQuery 플레이버는 브라우저 간 DOM 액세스를 위해 jQuery API를 사용합니다.",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "전체 사용자를 대상으로 합니다.",
                "browserService-w3c-description": "UIC 라이브러리의 W3C 플레이버는 직접 브라우저 DOM API를 사용합니다." +
                                                  "<br /><em>참고:</em> W3C 플레이버는 써드파티 Sizzle JS 라이브러리도 포함해야 합니다. 고급 옵션의 Sizzle URL 섹션을 참조하십시오.",

                "browserService-useCapture": "이벤트 청취에 캡처 단계 사용",
                "browserService-useCapture-helptext": "이벤트 리스너를 등록할 때 이벤트 캡처 단계를 사용합니다. 사용 안함으로 설정되면 이벤트 버블링이 사용되며, 이벤트가 버블링하지 못하도록 금지된 경우 일부 이벤트가 누락될 수 있습니다. 이 설정을 사용할 것을 권장합니다." +
                                                      "<br /><em>참고:</em> 이전 버전의 Internet Explorer(IE 8 이하)는 이벤트 캡처 단계를 지원하지 않으며 자동으로 이벤트 버블링 사용으로 되돌아갑니다." +
                                                      "<br />이 설정에 대한 추가 세부사항은 W3C DOM 스펙(http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture)을 참조하십시오.",
                "browserService-sizzleObject": "Sizzle 오브젝트",
                "browserService-sizzleObject-helptext": "Sizzle 오브젝트에 대한 경로입니다. 건너뛰는 경우 window.Sizzle이 기본적으로 사용됩니다." +
                                                        "<br /><br /><em>참고:</em> W3C 서비스를 사용할 때 이전 버전의 Internet Explorer(IE 8 이하)에서 라이브러리가 올바르게 작동하려면 Sizzle이 필요합니다." +
                                                        " 앱이 jQuery의 버전을 사용하는 경우 jQuery가 이미 Sizzle을 포함하고 있으므로 별도의 Sizzle이 필요하지 않습니다." +
                                                        " Sizzle은 http://sizzlejs.com/에서 얻을 수 있습니다.",
                "browserService-jQueryObject": "jQuery 오브젝트",
                "browserService-jQueryObject-helptext": "jQuery 오브젝트에 대한 경로입니다. 건너뛰는 경우 window.jQuery가 기본적으로 사용됩니다.",
                "browserService-blacklistedElements": "블랙리스트 요소",
                "browserService-blacklistedElements-placeholder": "공백-쉼표-공백으로 구분된 정규식 또는 ID입니다.",
                "browserService-blacklistedElements-helptext": "고유하지 않거나 동적으로 생성되지 않은 요소 ID를 블랙리스트로 설정하십시오. 블랙리스트로 설정된 항목과 일치하는 요소 ID는 사용자 정의 속성 값 또는 XPATH로 바뀝니다." +
                                                               "<br /><br />팁: 블랙리스트를 구성하는 데 사용된 정규식의 유효성을 검증하려면 RegEx 테스터를 사용하십시오.",
                "browserService-customID": "사용자 정의 속성 ID",
                "browserService-customID-placeholder": "속성 이름입니다.",
                "browserService-customID-helptext": "요소의 HTML ID를 사용할 수 없거나 블랙리스트로 설정된 경우 해당 요소를 고유하게 식별하는 데 사용할 수 있는 하나 이상의 속성입니다.",
				"browserService-ieExcludedLinks": "Internet Explorer 제외 링크",
				"browserService-ieExcludedLinks-placeholder": "쉼표로 구분된 CSS 선택기입니다.",
				"browserService-ieExcludedLinks-helptext": "이 구성은 CSS 선택기의 배열로서 지정됩니다. 예를 들어, 이 구성은 다음과 같이 지정될 수 있습니다. " +
															" a[href^='javascript:'] " +
															"이는 다음 링크에 의해 트리거된 beforeunload를 무시합니다. < a href='javascript:void(0);'>여기를 클릭< /a>" +
															"<br/>참고: 올바르지 않은 문자(예: $)가 지정되고 \\를 사용하여 올바르게 이스케이프되지 않은 경우 Chrome 및 Webkit 브라우저에서 예외가 발생합니다.",
                "queueService-header": "큐 서비스 구성",
                "queueService-subHeader": "라이브러리의 내부 큐 구성",
                "queueService-queueName": "이름",
                "queueService-queueName-helptext": "이 릴리스에서는 하나의 큐만 지원됩니다. 큐 이름은 'DEFAULT'여야 합니다. 이 값을 변경하지 마십시오.",
                "queueService-queueEndpoint": "엔드포인트(대상 페이지)",
                "queueService-queueEndpoint-helptext": "캡처된 데이터가 게시될 웹 서버의 대상 페이지 URL입니다. 이 릴리스에서는 상호 도메인 URL은 지원되지 않습니다.",
                "queueService-queueSize-events": "크기(최대 메시지 수)",
                "queueService-queueSize-events-helptext": "큐를 비울 임계값입니다. 테스트의 경우 1-50 사이의 값과 프로덕션 배치의 경우 20-50 사이의 값이 권장됩니다.",
                "queueService-queueSize-serialized": "크기(최대 직렬화된 길이)",
                "queueService-queueSize-serialized-helptext": "큐를 비울 직렬화된 큐 길이 임계값입니다. 프로덕션 배치의 경우 8000 - 20000 사이의 값이 권장됩니다." +
                                                    "<br/>참고: gzip 인코딩을 사용하는 경우 값은 사전 인코딩된 크기 한계를 반영하도록 증가되어야 합니다." +
                                                    "<br/>경고: 이 설정을 사용하면 임계값을 확인하기 위해 큐를 직렬화해야 하므로 성능에 영향을 줄 수 있습니다.",
                "queueService-queueSize-serialized-label": " (0 값은 이 설정을 사용 안함으로 설정함)",
                "queueService-queueTimer": "타이머 간격(밀리초)",
                "queueService-queueTimer-label": " 밀리초(0 값은 타이머를 사용 안함으로 설정함)",
                "queueService-queueTimer-helptext": "새도우 찾아보기 시나리오를 사용하기 위해 메시지 수와 관계없이 큐를 정기적으로 비우도록 타이머 값을 설정할 수 있습니다. 대부분의 경우에는 이 설정을 사용 안함 상태로 두는 것이 가장 좋습니다.",

                "queueService-crossDomainEnabled": "상호 도메인 게시 메시지를 사용으로 설정합니다.",
                "queueService-crossDomainFrameSelector": "상호 도메인 프레임 선택기",
                "queueService-crossDomainFrameSelector-helptext": "상호 도메인 프레임 선택기는 요청을 게시하도록 구성된 페이지에 iframe 또는 프레임 요소를 지정해야 합니다.",

				"queueService-asyncReqOnUnload": "페이지 로드 해제 시 비동기 XHR을 사용합니다.",
				"queueService-asyncReqOnUnload-helptext": "페이지 로드 해제 동안 비동기 요청을 사용하려면 이 옵션을 선택하십시오.<br />경고: 페이지 로드 해제 시 비동기 요청을 사용하도록 설정하면 데이터가 완전하지 않거나 누락될 수 있습니다.",

                "queueService-checkEndpoint": "엔드포인트 확인",
                "queueService-checkEndpoint-helptext": "Discover 엔드포인트가 사용 가능한지 확인하려면 비동기 요청을 보내십시오.",
                "queueService-endpointCheckTimeout": "엔드포인트 제한시간 확인",
                "queueService-endpointCheckTimeout-helptext": "Discover 엔드포인트가 사용 가능한지 확인하는 비동기 요청의 제한시간입니다.",

                "queueService-queueSerializer": "시리얼라이저",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "JSON 직렬화만 지원됩니다.",
                "queueService-addQueue": "다른 큐 추가",

                "messageService-header": "메시지 서비스 구성",
                "messageService-subHeader": "개인 마스킹 구성",
                "messageService-targets": "대상",
                "messageService-id": "ID",
                "messageService-id-helptext": "마스크해야 하는 요소의 HTML ID, XPath 또는 사용자 정의 속성 ID('attrName=attrValue')입니다.",
                "messageService-idType": "ID 유형",
                "messageService-idType--1": "HTML ID",
                "messageService-idType--2": "xPath",
                "messageService-idType--3": "사용자 정의 속성 ID",
                "messageService-idType-helptext": "올바른 ID 유형을 선택하십시오.",
                "messageService-addTarget": "다른 대상 추가",
                "messageService-maskType": "마스크 유형",
                "messageService-maskType-1": "비어 있음",
                "messageService-maskType-2": "기본",
                "messageService-maskType-3": "유형    ",
                "messageService-maskType-4": "사용자 정의",
                "messageService-maskType-helptext": "마스크 유형은 값을 변환하는 방법을 정의합니다." +
                                                    "<dl>" +
                                                        "<dt><b>비어 있음:</b></dt>" +
                                                        "<dd>값이 비어 있는 문자열로 설정됩니다.</dd>" +
                                                        "<dt><b>기본:</b></dt>" +
                                                        "<dd>값이 고정 문자열 \"XXXXX\"로 바뀝니다.</dd>" +
                                                        "<dt><b>유형:</b></dt>" +
                                                        "<dd>" +
                                                            "값은 각각 다음과 같이 마스크에 의해 바뀝니다." +
                                                            "<ul>" +
                                                                "<li>소문자는 \"x\"로 바뀝니다.</li>" +
                                                                "<li>대문자는 \"X\"로 바뀝니다.</li>" +
                                                                "<li>숫자는 \"9\"로 바뀝니다.</li>" +
                                                                "<li>기호는 \"@\"로 바뀝니다.</li>" +
                                                            "</ul>" +
                                                            "따라서 \"HelloWorld123\" 문자열은 \"XxxxxXxxxx999\"가 됩니다." +
                                                        "</dd>" +
                                                        "<dt><b>사용자 정의:</b></dt>" +
                                                        "<dd>값은 MaskFunction 텍스트 상자에 작성해야 하는 사용자 정의 함수의 리턴값에 의해 바뀝니다.</dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "함수 마스크",
                "messageService-maskFunction-helptext": "마스크 해제된 문자열을 승인하고 마스크된 값을 리턴하는 JavaScript 함수입니다.",
                "messageService-addConfiguration": "개인 구성 추가",
				"messageService-cssSelector": "CSS 선택기",
				"messageService-cssSelector-helptext": "단일 CSS 선택기 문자열을 추가하십시오.",
				"services-message-privacy-cssSelector-placeholder": "여기에 CSS 선택기 문자열을 추가하십시오.",
				"messageService-removePrivacyConfigurationTarget": "대상 제거",
				"messageService-removePrivacyConfiguration": "개인 구성 제거",

                "serializer-header": "시리얼라이저 서비스 구성",
                "serializer-defaultToBuiltin": "사용 가능한 항목이 없는 경우 기본 제공 구문 분석/시리얼라이저 사용",
                "serializer-defaultToBuiltin-helptext": "UIC에는 고유의 JSON 구문 분석기/시리얼라이저 기본 구현이 제공됩니다. JSON 구문 분석기/시리얼라이저는 다음과 같이 선택됩니다.<br />" +
                                                        "<ol>" +
                                                          "<li>아래 구성에서 JSON 구문 분석기/시리얼라이저가 명시적으로 지정되는 경우 UIC는 이를 사용합니다." +
                                                          "<li>아래 구성에서 JSON 구문 분석기/시리얼라이저가 명시적으로 지정되지 않는 경우 UIC는 브라우저에서 JSON을 고유하게 지원하는지 확인합니다." +
                                                          "<li>브라우저가 JSON을 고유하게 지원하지 않고 이 선택란을 선택하는 경우, UIC는 고유하게 제공되는 JSON의 기본 구현을 사용합니다." +
                                                          "<li>위의 항목이 모두 해당되지 않는 경우 UIC는 자동으로 실패합니다." +
                                                        "</ol>",
                "serializer-parsers": "구문 분석기",
                "serializer-parsers-helptext": "이 목록에는 UIC가 사용해야 하는 구문 분석기 함수(예: JSON.parse)가 포함되어 있습니다. 첫 번째 항목이 가장 중요합니다. UIC는 첫 번째 항목을 찾지 못하면 다음 항목(지정된 경우)을 찾고 이를 찾지 못하면 다시 다음 항목을 찾습니다.",
                "serializer-parser": "구문 분석기",
                "serializer-addParser": "다른 구문 분석기 추가",
                "serializer-stringifiers": "시리얼라이저",
                "serializer-stringifiers-helptext": "이 목록에는 UIC가 사용해야 하는 시리얼라이저 함수(예: JSON.stringify)가 포함되어 있습니다. 첫 번째 항목이 가장 중요합니다. UIC는 첫 번째 항목을 찾지 못하면 다음 항목(지정된 경우)을 찾고 이를 찾지 못하면 다시 다음 항목을 찾습니다.",
                "serializer-stringifier": "시리얼라이저",
                "serializer-addStringifier": "다른 시리얼라이저 추가",

				"encoder-header": "인코더 서비스 구성",
				"encoder": "인코더",
				"encoder-enable": "사용",
                "encoder-enable-helptext": "이 서비스를 사용하도록 설정하면 UIC가 요청 데이터에 gzip 압축을 적용할 수 있습니다. 인코더 서비스는 UIC가 초기화되기 전에 페이지에 포함되고 초기화될 'pako' 개방 소스 라이브러리에 따라 달라지는 점을 참고하십시오. 다운로드를 포함한 'pako'에 대한 자세한 정보는 https://github.com/nodeca/pako를 참조하십시오.",
				"encoder-encode": "인코딩",
				"encoder-defaultEncoding": "기본 인코딩",
				"encoder-helptext": "압축 인코더 서비스를 구성합니다. 기본적으로 gzip이 구성됩니다.",
				"encoder-defaultEncoding-helptext": "UIC가 HTTP 요청 헤더에 지정할 인코딩 유형입니다. 기본적으로 'Content-encoding: gzip'입니다.",
				"encoder-encode-helptext": "인코더에 대한 경로입니다. 기본적으로 'window.pako.gzip'입니다.",

                "modules-header": "모듈",
                "modules-subHeader": "사용으로 설정된 모듈 선택",
                "modules-performance": "성능",
                "modules-performance-helptext": "W3C 탐색 타이밍 특성",
                "modules-PerformanceSettings": "성능 설정",
                "modules-replay": "재생",
                "modules-replay-helptext": "재생, 사용성 및 단계 기반 이벤트를 사용으로 설정하기 위한 사용자 상호작용 모니터링입니다.",
				"modules-usability": "Usability",
				"modules-usability-helptext": "mouseout, mousemove 및 click usability 이벤트를 구성에 추가합니다.",
                "modules-moduleBaseURL": "moduleBase URL:",
                "modules-moduleBaseURL-helptext": "서버에서 동적으로 로드할 수 있는 모듈로부터의 위치입니다. 이 옵션은 현재 릴리스에서는 사용되지 않습니다.",
                "modules-replay-events": "이벤트 재생",
                "modules-hover-tracking": "위로 마우스 이동 추적 사용",
                "modules-mobile-events": "모바일 이벤트 사용",
                "modules-hashchange": "해시 변경에서 화면 보기 사용",
                "modules-scroll-winsize": "화면 이동 및 창 크기 추적 사용",
				"modules-navigationStart-helptext": "이 속성은 사용자 에이전트가 이전 문서를 로드 해제하기 위한 프롬프트 표시를 완료한 직후의 시간을 리턴해야 합니다. 이전 문서가 없는 경우 이 속성은 fetchStart와 동일한 값을 리턴해야 합니다.",
				"modules-unloadEventStart-helptext": "이전 문서의 원본과 현재 문서의 원본이 동일한 경우[IETF RFC 6454], 이 속성은 사용자 에이전트가 이전 문서의 로드 해제 이벤트를 시작하기 직전의 시간을 리턴해야 합니다. 이전 문서가 없거나 이전 문서의 원본이 현재 문서의 원본과 다른 경우, 이 속성은 0을 리턴해야 합니다.",
				"modules-unloadEventEnd-helptext": "이전 문서의 원본과 현재 문서의 원본이 동일한 경우, 이 속성은 사용자 에이전트가 이전 문서의 로드 해제 이벤트를 완료한 직후의 시간을 리턴해야 합니다. 이전 문서가 없거나 이전 문서의 원본이 현재 문서의 원본과 다른 경우 또는 로드 해제가 아직 완료되지 않은 경우, 이 속성은 0을 리턴해야 합니다. 탐색할 때 HTTP 경로 재지정 또는 이와 동등한 요청이 있고 모든 경로 재지정 또는 이와 동등한 요청이 동일한 원본에서 유래하지는 않은 경우, unloadEventStart와 unloadEventEnd는 0을 리턴해야 합니다.",
				"modules-redirectStart-helptext": "탐색할 때 HTTP 경로 재지정 또는 이와 동등한 요청이 있고 모든 경로 재지정 또는 이와 동등한 요청이 동일한 원본에서 유래하는 경우, 이 속성은 경로 재지정을 시작하는 페치의 시작 시간을 리턴해야 합니다. 그렇지 않으면 이 속성은 0을 리턴해야 합니다.",
				"modules-redirectEnd-helptext": "탐색할 때 HTTP 경로 재지정 또는 이와 동등한 요청이 있고 모든 경로 재지정 및 이와 동등한 요청이 동일한 원본에서 유래하는 경우, 이 속성은 마지막 경로 재지정의 응답의 마지막 바이트를 수신한 직후의 시간을 리턴해야 합니다. 그렇지 않으면 이 속성은 0을 리턴해야 합니다.",
				"modules-fetchStart-helptext": "새 자원을 HTTP GET 또는 이와 동등한 함수를 사용하여 페치할 경우 fetchStart는 사용자 에이전트가 모든 관련 애플리케이션 캐시 검사를 시작하기 직전의 시간을 리턴해야 합니다. 그렇지 않은 경우에는 사용자 에이저트가 자원 페치를 시작하는 시간을 리턴해야 합니다.",
				"modules-domainLookupStart-helptext": "이 속성은 사용자 에이전트가 현재 문서에 대한 도메인 이름 검색을 시작하기 직전의 시간을 리턴해야 합니다. 지속적 연결[RFC 2616]이 사용되거나 현재 문서가 관련 애플리케이션 캐시 또는 로컬 자원에서 검색되는 경우, 이 속성은 fetchStart와 동일한 값을 리턴해야 합니다.",
				"modules-domainLookupEnd-helptext": "이 속성은 사용자 에이전트가 현재 문서에 대한 도메인 이름 검색을 완료한 직후의 시간을 리턴해야 합니다. 지속적 연결[RFC 2616]이 사용되거나 현재 문서가 관련 애플리케이션 캐시 또는 로컬 자원에서 검색되는 경우, 이 속성은 fetchStart와 동일한 값을 리턴해야 합니다.",
				"modules-connectStart-helptext": "이 속성은 사용자 에이전트가 문서를 검색하기 위해 서버에 대한 연결 설정을 시작하기 직전의 시간을 리턴해야 합니다. 지속적 연결[RFC 2616]이 사용되거나 현재 문서가 관련 애플리케이션 캐시 또는 로컬 자원에서 검색되는 경우, 이 속성은 domainLookupEnd의 값을 리턴해야 합니다.",
				"modules-connectEnd-helptext": "이 속성은 사용자 에이전트가 현재 문서를 검색하기 위해 서버에 대한 연결 설정을 완료한 직후의 시간을 리턴해야 합니다. 지속적 연결[RFC 2616]이 사용되거나 현재 문서가 관련 애플리케이션 캐시 또는 로컬 자원에서 검색되는 경우, 이 속성은 domainLookupEnd의 값을 리턴해야 합니다. 전송 연결이 실패하고 사용자 에이전트가 연결을 다시 여는 경우 connectStart 및 connectEnd는 새 연결의 해당 값을 리턴해야 합니다. connectEnd는 전송 연결을 설정하기 위한 시간 간격과 SSL 핸드쉐이크 및 SOCKS 인증과 같은 기타 시간 간격을 포함해야 합니다.",
				"modules-secureConnectionStart-helptext": "이 속성은 선택사항입니다. 이 속성을 사용할 수 없는 사용자 에이전트는 이 속성을 정의된 대로 설정해야 합니다. 이 속성이 사용 가능한 경우 현재 페이지의 스킴이 HTTPS이면 이 속성은 사용자 에이전트가 현재 연결을 안전하게 보호하기 위해 핸드쉐이크 프로세스를 시작하기 직전의 시간을 리턴해야 합니다. 이 속성은 사용 가능하지만 HTTPS는 사용되지 않으면 이 속성은 0을 리턴해야 합니다.",
				"modules-requestStart-helptext": "이 속성은 사용자 에이전트가 서버, 관련 애플리케이션 캐시 또는 로컬 자원에서 현재 문서 요청을 시작하기 직전의 시간을 리턴해야 합니다. 요청이 전송된 후 전송 연결이 실패하고 사용자 에이전트가 연결을 다시 연 후 요청을 다시 전송하는 경우, requestStart는 새 요청의 해당 값을 리턴해야 합니다.",
				"modules-responseStart-helptext": "이 속성은 사용자 에이전트가 서버, 관련 애플리케이션 캐시 또는 로컬 자원에서 응답의 첫 번째 바이트를 수신한 직후의 시간을 리턴해야 합니다.",
				"modules-responseEnd-helptext": "이 속성은 사용자 에이전트가 현재 문서의 마지막 바이트를 수신한 직후 또는 전송 연결이 닫히기 직전의 시간(어느 쪽이든 먼저 도달하는 시간)을 리턴해야 합니다. 여기에서 문서는 서버, 관련 애플리케이션 캐시 또는 로컬 자원에서 수신될 수 있습니다.",
				"modules-domLoading-helptext": "이 속성은 사용자 에이전트가 현재 문서 준비 상태를 '로드 중'으로 설정하기 직전의 시간을 리턴해야 합니다.",
				"modules-domInteractive-helptext": "이 속성은 사용자 에이전트가 현재 문서 준비 상태를 '대화식'으로 설정하기 직전의 시간을 리턴해야 합니다.",
				"modules-domContentLoadedEventStart-helptext": "이 속성은 사용자 에이전트가 문서에서 DOMContentLoaded 이벤트를 실행하기 직전의 시간을 리턴해야 합니다.",
				"modules-domContentLoadedEventEnd-helptext": "이 속성은 문서의 DOMContentLoaded 이벤트가 완료된 직후의 시간을 리턴해야 합니다.",
				"modules-domComplete-helptext": "이 속성은 사용자 에이전트가 현재 문서 준비 상태를 '완료'로 설정하기 직전의 시간을 리턴해야 합니다. 현재 문서 준비 상태가 여러 번 동일한 상태로 변경되는 경우 domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd 및 domComplete는 해당 문서 준비 상태로 처음 변경된 시간을 리턴해야 합니다.",
				"modules-loadEventStart-helptext": "이 속성은 현재 문서의 로드 이벤트가 실행되기 직전의 시간을 리턴해야 합니다. 로드 이벤트가 아직 실행되지 않은 경우에는 0을 리턴해야 합니다.",
				"modules-loadEventEnd-helptext": "이 속성은 현재 문서의 로드 이벤트가 완료된 시간을 리턴해야 합니다. 로드 이벤트가 아직 실행되지 않았거나 완료되지 않은 경우에는 0을 리턴해야 합니다.",
				"modules-mobile-events-helptext": "모바일 세션에서 이벤트 재생을 사용으로 설정합니다.",
				"modules-hashchange-helptext": "사용으로 설정된 경우 이 옵션은 페이지의 URL에서 해시 변경이 식별되면 화면 보기 이벤트를 생성합니다. 화면 보기 이벤트는 세션 데이터에 삽입되고 UI 캡처에 의해 캡처된 UI 이벤트는 해당 이벤트가 발생한 화면 보기 아래에 구성될 수 있습니다.",
				"modules-scroll-winsize-helptext": "참고: 애플리케이션에 따라 추적 창 화면 이동 시 상당한 수의 이벤트가 생성될 수 있습니다. 클라이언트에서 캡처된 화면 이동 이벤트의 재생은 BBR 전용의 모바일 세션에서만 지원됩니다.",

                "performance-calculateRenderTime": "W3C 탐색 타이밍을 지원하지 않는 브라우저의 렌더링 시간 계산",
                "performance-calculateRenderTime-helptext": "렌더링 시간은 페이지 로드와 라이브러리 로드 간의 <br>시간 차이를 측정하여 계산됩니다.",
                "performance-calculateRenderTime-description": "이 설정이 사용으로 설정되면 라이브러리는 라이브러리 로드 시간과 페이지 로드 시간 간의 차이로 렌더링 시간을 계산합니다. 정확한 측정을 위해 라이브러리가 페이지 로드 주기에서 가능한 한 일찍 로드되도록 하십시오.",
				"performance-renderTimeThreshold": "renderTimeThreshold: ",
				"performance-renderTimeThreshold-helptext": "최대 렌더링 시간(밀리초)입니다. 기본값은 10분<br>(600000밀리초)입니다. 임계값을 초과하는 것으로 측정된 렌더링 시간은 <br>'invalidRenderTime'으로 보고되고 렌더링 시간 <br>성능 보고서에 포함되지 않습니다.",

				"replay-customEventName-placeholder": "단일 이벤트 이름을 입력하십시오. 예: mousedown",
				"replay-customEventTarget-placeholder": "대상 요소에 대한 CSS 선택기를 입력하십시오.",
				"replay-customEvent": "사용자 정의 재생 이벤트",
				"replay-customEvent-helptext": "위임 대상 요소 또는 문서 또는 창에 대한 CSS 선택기를 입력하십시오.",
				"replay-addCustomDelegate": "사용자 정의 재생 이벤트 추가",
				"replay-customEvent-name": "이벤트 이름",
				"replay-customEvent-target": "이벤트 대상",
				"replay-customEvent-name-helptext": "여기에 이벤트 이름을 입력하십시오. 예: mousedown",
				"replay-customEvent-target-helptext": "대상 요소 또는 문서 또는 창에 대한 CSS 선택기를 입력하십시오.",
				"replay-customEvent-delegateTarget": "이벤트 위임 대상(선택사항)",
				"replay-customEvent-delegateTarget-helptext": "위임 대상 요소 또는 문서 또는 창에 대한 CSS 선택기를 입력하십시오. 이 설정은 선택사항입니다.",
				"replay-customEvent-recurseFrames": "순환 프레임(선택사항)",
				"replay-customEvent-recurseFrames-helptext": "선택하면 이벤트에 대한 리스너가 문서의 하위 프레임/iframe에 적용됩니다. 이 설정은 선택사항입니다.",
                "replay-customEvent-state": "상태",
                "replay-customEventState-placeholder": "사용자 정의 이벤트의 상태로 사용할 특성을 입력하십시오.",
                "replay-customEvent-state-helptext": "사용자 정의 재생 이벤트 전용으로 target.currState 값이 JSON에 설정되는 방법을 지정합니다.",
				"replay-removeCustomEvent": "사용자 정의 재생 제거",

				"domCapture-header": "DOM 캡처",
				"domCapture-enabled": "DOM 캡처 사용",
				"domCapture-enabled-helptext": "경고: DOM 캡처 사용은 데이터 전송 및 인프라스트럭처에 중요한 영향을 미칩니다. 따라서 이 기능은 신중하게 사용해야 합니다. 사용하도록 설정한 경우 특정 이벤트 및 요소에 기반하는 DOM 캡처만 수행하도록 추가 구성이 필요합니다. 자세한 내용은 문서를 참조하십시오.",
				"domCapture-captureFrames": "프레임 캡처",
				"domCapture-captureFrames-helptext": "선택하면 하위 프레임 및 iframe이 캡처됩니다. 참고: 상위 페이지 자체와 동일한 도메인에서 얻은 컨텐츠만 캡처할 수 있습니다.",
				"domCapture-removeScripts": "스크립트 제거",
				"domCapture-removeScripts-helptext": "선택하면 캡처된 스냅샷에서 모든 스크립트 태그가 제거됩니다.",
                "domCapture-diffEnabled": "DOM 차이 사용",
                "domCapture-diffEnabled-helptext": "선택하면 초기 전체 DOM 스냅샷 이후 DOM 차이가 전송됩니다. 이 설정을 사용할 것을 권장합니다.",
                "domCapture-maxLength": "최대 길이",
                "domCapture-maxLength-helptext": "이 임계값을 초과하면 스냅샷이 전송되지 않습니다.",
                "domCapture-maxMutations": "최대 변형 수",
                "domCapture-maxMutations-helptext": "이 임계값을 충족하거나 초과하면 차이점 대신 전체 DOM 스냅샷이 작성됩니다. 이 설정을 사용하여 DOM 캡처 구성을 세부 조정하고 과도한 DOM 변형의 처리로 인한 성능 병목 현상을 방지하는 안전 한계를 설정할 수 있습니다.",
				"domCapture-subHeader": "DOM 캡처 트리거 추가",
				"domCapture-trigger": "트리거",
				"domCapture-addTrigger": "트리거 추가",
				"domCapture-event": "이벤트",
				"domCapture-event-helptext": "사용 가능한 이벤트는 로드, 로드 해제, 클릭 또는 변경입니다.",
				"domCapture-screenview": "화면 보기",
				"domCapture-addScreenview": "화면 보기 추가",
				"domCapture-removeScreenview": "화면 보기 제거",
				"domCapture-delay": "지연",
				"domCapture-delay-helptext": "이후에 DOM 스냅샷이 작성되어야 하는 선택적 지연(밀리초)입니다.",
				"domCapture-delay-placeholder": "숫자를 입력하십시오.",
                "domCapture-fullDOMCapture": "전체 DOM 캡처",
                "domCapture-fullDOMCapture-helptext": "선택된 경우 이 트리거에 대한 전체 DOM 스냅샷이 작성됩니다.",
				"domCapture-removeTrigger": "트리거 제거",
				"domCapture-addTarget": "대상 추가",
				"domCapture-removeTarget": "대상 제거",
				"domCapture-target": "대상",
				"domCapture-target-id": "ID",
				"domCapture-target-id-helptext": "세 가지 ID 유형 중 하나로 지정된 대상의 ID입니다.",
				"domCapture-target-idType": "ID 유형",
				"domCapture-target-idType-helptext": "요소의 HTML ID, XPath 또는 사용자 정의 ID입니다.",
				"domCapture-target-cssSelector": "CSS 선택기",
				"domCapture-target-cssSelector-helptext": "단일 CSS 선택기 문자열을 추가하십시오.",
                "domCapture-load": "로드",
                "domCapture-unload": "로드 해제",
                "domCapture-click": "클릭",
                "domCapture-change": "변경",
                "domCapture-custom": "사용자 정의",
                "domCapture-custom-eventName": "사용자 정의 이벤트 이름:",

                "DCCookie-header": "쿠키 & 세션 관리",
                "DCCookie-enabled": "DCCookie 모듈 사용",
                "DCCookie-enabled-helptext": "DCCookie 모듈은 애플리케이션 키 및 세션화 쿠키의 구성을 허용합니다. 이는 Discover SaaS 서비스를 사용할 때 필요합니다. 추가 정보에 대해서는 Discover SaaS 문서를 참조하십시오.",
                "DCCookie-dcAppKey": "애플리케이션 키",
                "DCCookie-dcAppKey-helptext": "이 필드에 Discover SaaS 애플리케이션 키를 입력하십시오.",
                "DCCookie-sessionCookie": "세션화 쿠키 이름",
                "DCCookie-sessionCookie-helptext": "세션화에 사용되는 쿠키를 지정하십시오. 세션화 쿠키로 <strong>DCXSID</strong>를 지정하면 쿠키가 이미 존재하지 않을 경우 UIC가 쿠키를 작성하게 합니다.",
                
                "geolocation-header": "위치정보",
                "geolocation-enable": "위치정보 로깅 사용",
                "geolocation-load": "로드 이벤트 동안 위치정보",
                "geolocation-load-helptext": "로드 이벤트 동안 위치정보 로깅을 사용으로 설정합니다.",
                "geolocation-helptext": "위치정보 로깅은 사용 가능한 경우 측정 위도, 경도 및 정확성을 보고합니다.",

                "misc-header": "기타 설정",
                "sessionData-options": "세션 데이터 공유 옵션",
                "sessionData-Enable": "세션 데이터 공유",
                "sessionData-Enable-description": "이 옵션을 선택하면 페이지의 다른 스크립트와 세션 데이터를 공유할 수 있습니다. 자세한 내용은 문서를 참조하십시오.",
                "sessionData-Enable-helptext": "이 옵션을 선택하면 페이지의 다른 스크립트와 세션 데이터를 공유할 수 있습니다. 자세한 내용은 문서를 참조하십시오.",
                "sessionId-Cookie": "쿠키",
                "sessionId-Cookie-description": "쿠키가 세션화에 사용되는 경우 이 옵션을 선택하십시오.",
                "sessionId-Cookie-helptext": "쿠키가 세션화에 사용되는 경우 이 옵션을 선택하십시오.",
                "sessionId-Query": "쿼리 매개변수",
                "sessionId-Query-description": "쿼리 매개변수가 세션화에 사용되는 경우 이 옵션을 선택하십시오.",
                "sessionId-Query-helptext": "쿼리 매개변수가 세션화에 사용되는 경우 이 옵션을 선택하십시오.",
                "sessionId-Cookie-Name": "쿠키 이름",
                "sessionId-Cookie-Name-helptext": "세션화에 사용되는 쿠키의 이름입니다. 예를 들어, DCXSID, jsessionid 등입니다.",
                "sessionId-Query-Name": "쿼리 매개변수 이름",
                "sessionId-Query-Name-helptext": "세션화에 사용되는 쿼리 매개변수의 이름(LHS)입니다.",
                "sessionId-Query-Delimiter": "쿼리 문자열 구분 기호",
                "sessionId-Query-Delimiter-helptext": "애플리케이션에서 사용될 쿼리 문자열 구분 기호를 지정하십시오. 기본값: &",
                "sessionId-ValueNeedsHashing": "값을 해시해야 함",
                "sessionId-ValueNeedsHashingDescription": "세션 ID를 도출하기 위해 값을 해시해야 하는 경우 이 옵션을 선택하십시오.",
                "misc-frames-blacklist-label": "블랙리스트로 설정된 프레임",
                "misc-frames-blacklist-helptext": "데이터 콜렉션에서 제외된 프레임의 CSS 선택기입니다.",
                "misc-frames-blacklist-placeholder": "공백-쉼표-공백으로 구분된 CSS 선택기입니다.",

                "regextester-headline": "정규식 테스트",
                "regextester-regex": "정규식",
                "regextester-flag-i": "대소문자 구분 안함(i)",
                "regextester-flag-g": "글로벌(g)",
                "regextester-sample": "테스트 샘플",
                "regextester-matches": "일치?",
                "regextester-copylabel": "(구성에 복사하여 붙여넣을 준비가 완료됨)",
                "regextester-btn-test": "테스트",

                "unsupported-header": "너무 오래되었거나 지원되지 않는 브라우저입니다.",
                "unsupported-sudHeader": "다음 브라우저 중 하나를 사용하십시오.",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "(버전 17.0 이상)",
                "unsupported-safari-versioninfo": "(버전 6.0 이상)",

                "validation-timerinterval": "타이머 간격이 올바르지 않습니다.1000과 600000 사이의 숫자를 입력하십시오.",
                "validation-maxevents": "크기(최대 메시지 수)가 올바르지 않습니다. 1과 100 사이의 숫자를 입력하십시오.",
                "validation-renderTimeThreshold": "렌더링 시간 임계값이 올바르지 않습니다. 숫자를 입력하십시오.",
                "validation-maxSize": "크기(최대 직렬화된 길이)가 올바르지 않습니다. 4000과 1000000 사이의 숫자를 입력하십시오.",

                "reload-page": "언어 변경사항을 적용하려면 페이지를 다시 로드하십시오."
            }

,
            ptBR: // NLS_CHARSET=UTF-8
{
                "site-title": "Assistente de Configuração UIC",
                "page-headline": "Assistente de Configuração UIC",
				"uic-version": "Versão UIC ",
                "advanced-options": "Opções Avançadas",
                "btn-prev": "Anterior",
                "btn-next": "Avançar",
                "btn-finish": "Concluir",
                "btn-reset": "Reconfigurar para Padrões",
                "btn-regextester": "Testador RegEx",

                "library-type-prod-min": "Construção de produção (reduzido)",
                "library-type-prod": "Construção de produção (não reduzido)",
                "library-type-dev": "Construção de desenvolvimento (não reduzido)",

                "core-inactivityTimeout": "Tempo Limite de Inatividade (milliseconds)",
                "core-inactivityTimeout-helptext": "O Tempo Limite de Inatividade especifica um valor de tempo limite durante o qual, se não houver atividade do usuário, o UIC encerrará automaticamente. " +
                                                   "O valor de tempo limite integrado de 10 minutos é usado se nenhum valor de tempo limite for especificado. " +
                                                   "<br /><em>Nota:</em> Ao especificar um valor de tempo limite de 0, este recurso é desativado. Isso pode causar ocorrências de UI órfãs e não é recomendado.",

                "browserService-header": "Configuração de serviço de navegador",
                "browserService-subHeader": "Selecionar um tipo:",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "O tipo jQuery é o ÚNICO suportado se o aplicativo da web usar o Query 1.7 ou superior.",
                "browserService-jQuery-description": "O tipo jQuery da biblioteca UIC usa a API jQuery para acesso a DOM entre navegadores.",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "Para todos os demais.",
                "browserService-w3c-description": "O tipo W3C da biblioteca UIC usa diretamente as APIs do DOM do navegador." +
                                                  "<br /><em>Nota:</em> O tipo W3C requer que a biblioteca Sizzle JS de terceiros seja incluída também. Consulte a seção URL de Sizzle nas opções avançadas.",

                "browserService-useCapture": "Use a captura de fase para recebimento de evento",
                "browserService-useCapture-helptext": "Ativa a fase de captura de evento ao registrar listeners de eventos. Se desativada, a propagação de eventos é usada; isso pode causar a ausência de alguns eventos, caso estes tenham sido protegidos contra propagação.. É recomendado ativar esta configuração." +
                                                      "<br /><em>Nota:</em> Versões mais antigas do Internet Explorer (IE 8 e anteriores) não suportam a fase de captura de eventos e passarão automaticamente a usar a propagação de eventos." +
                                                      "<br />Para obter detalhes adicionais sobre esta configuração, consulte a especificação W3C DOM: http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture",
                "browserService-sizzleObject": "Objeto do Sizzle",
                "browserService-sizzleObject-helptext": "O caminho para o objeto do Sizzle. Se ignorado, window.Sizzle é usado por padrão." +
                                                        "<br /><br /><em>Nota:</em> o Sizzle é necessário para a operação correta da biblioteca em versões mais antigas do Internet Explorer (IE 8 e anterior) ao usar o serviço do W3C." +
                                                        " Se o aplicativo usar qualquer versão do jQuery, não há necessidade de um Sizzle separado ser incluído desde que o jQuery já tenha incluído o Sizzle." +
                                                        " O Sizzle pode ser obtido a partir de http://sizzlejs.com/",
                "browserService-jQueryObject": "Objeto do jQuery",
                "browserService-jQueryObject-helptext": "O caminho para o objeto do jQuery. Se ignorado, window.jQuery é usado por padrão.",
                "browserService-blacklistedElements": "Elementos incluídos na lista de bloqueio",
                "browserService-blacklistedElements-placeholder": "Os IDs ou expressões regulares separados pelo espaço vírgula espaço.",
                "browserService-blacklistedElements-helptext": "Coloque na lista de bloqueio todos os IDs de elementos que não são exclusivos e/ou gerados dinamicamente. Os IDs de elemento que correspondem a qualquer uma das entradas incluídas na lista de bloqueio serão substituídos com os valores do atributo customizado ou XPATH." +
                                                               "<br /><br />Dica: Use o testador RegEx para validar todas as expressões regulares usadas para configurar a lista de bloqueio.",
                "browserService-customID": "ID do atributo customizado",
                "browserService-customID-placeholder": "Nome do atributo.",
                "browserService-customID-helptext": "Um ou mais atributos que podem ser usados para identificar exclusivamente um elemento quando seu ID HTML não está disponível ou está incluído na lista de bloqueio.",
				"browserService-ieExcludedLinks": "Links Excluídos do Internet Explorer",
				"browserService-ieExcludedLinks-placeholder": "Seletores CSS separados por vírgulas.",
				"browserService-ieExcludedLinks-helptext": "Esta configuração é especificada como uma matriz de seletores CSS. Por exemplo, a configuração seria especificada como: " +
															" a[href^='javascript:'] " +
															"para ignorar o beforeunload acionado pelo link: < a href='javascript:void(0);'>Clique aqui< /a>" +
															"<br/>NOTA: Se um caractere inválido (por exemplo $) for especificado, e ele não estiver adequadamente entre caracteres de escape \\ então uma exceção nos navegadores Chrome e Webkit será o resultado.",
                "queueService-header": "Configuração de Serviço de Fila",
                "queueService-subHeader": "Configure a fila interna da biblioteca",
                "queueService-queueName": "Nome",
                "queueService-queueName-helptext": "Somente uma fila é suportada nesta liberação. O nome da fila DEVE ser 'PADRÃO'. Não altere este valor.",
                "queueService-queueEndpoint": "Terminal (Página de destino)",
                "queueService-queueEndpoint-helptext": "A URL da página de destino no servidor da web em que os dados capturados serão postados. As URLs de domínio cruzado não são suportadas nesta liberação.",
                "queueService-queueSize-events": "Tamanho (Máx. de mensagens)",
                "queueService-queueSize-events-helptext": "O limite após o qual a fila será limpa. Os valores recomendados são entre 1-50 para teste e entre 20-50 para uma implementação de produção.",
                "queueService-queueSize-serialized": "Tamanho (Máx. de comprimento serializado)",
                "queueService-queueSize-serialized-helptext": "O limite do comprimento serializado da fila após o qual a fila será liberada. Os valores recomendados estão entre 8000-20000 para uma implementação de produção." +
                                                    "<br/>NOTA: Se a codificação gzip estiver sendo usada, então o valor deve ser aumentado para refletir o limite de tamanho pré-codificado." +
                                                    "<br/>AVISO: Ativar esta configuração pode ter um impacto de desempenho em alguns casos, uma vez que depende de serializar a fila a fim de verificar o limite.",
                "queueService-queueSize-serialized-label": " (um valor de 0 desativa esta configuração)",
                "queueService-queueTimer": "Intervalo de cronômetro (milissegundos)",
                "queueService-queueTimer-label": " milissegundos (um valor de 0 desativa o cronômetro).",
                "queueService-queueTimer-helptext": "Para ativar os cenários de navegação de sombra, é possível configurar o valor do cronômetro para limpar periodicamente a fila, independentemente do número de mensagens. Na maioria dos casos, é melhor deixar esta configuração desativada.",

                "queueService-crossDomainEnabled": "Ativar mensagens POST de domínio cruzado.",
                "queueService-crossDomainFrameSelector": "Seletor de estrutura de domínio cruzado",
                "queueService-crossDomainFrameSelector-helptext": "O seletor de estrutura de domínio cruzado deveria especificar o iframe ou elemento de quadro na página que foi configurada para solicitações de POST.",

				"queueService-asyncReqOnUnload": "Ativar XHR assíncrono no descarregamento da página.",
				"queueService-asyncReqOnUnload-helptext": "Verifique esta opção para permitir solicitação assíncrona durante o descarregamento da página.<br />AVISO: Permitir solicitação assíncrona no descarregamento da página pode resultar em dados incompletos ou ausentes.",

                "queueService-checkEndpoint": "Verificar terminal",
                "queueService-checkEndpoint-helptext": "Envie uma solicitação assíncrona para verificar se o terminal Discover está disponível.",
                "queueService-endpointCheckTimeout": "Verificar tempo limite do terminal",
                "queueService-endpointCheckTimeout-helptext": "O tempo limite para a solicitação assíncrona verificando se o terminal Discover está disponível.",

                "queueService-queueSerializer": "Serializador",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "Somente a serialização JSON é suportada.",
                "queueService-addQueue": "Incluir outra fila",

                "messageService-header": "Configuração de Serviço de Mensagens",
                "messageService-subHeader": "Configuração de Criação de Máscara de Privacidade",
                "messageService-targets": "Destinos",
                "messageService-id": "ID",
                "messageService-id-helptext": "O ID HTML, XPath ou ID de Atributo Customizado ('attrName=attrValue') do elemento que deveria ser mascarado.",
                "messageService-idType": "Tipo de ID",
                "messageService-idType--1": "ID HTML",
                "messageService-idType--2": "xPath",
                "messageService-idType--3": "ID do Atributo Customizado",
                "messageService-idType-helptext": "Selecione o tipo de ID correto.",
                "messageService-addTarget": "Incluir outro destino",
                "messageService-maskType": "Tipo de máscara",
                "messageService-maskType-1": "Vazio",
                "messageService-maskType-2": "Básico",
                "messageService-maskType-3": "Tipo",
                "messageService-maskType-4": "Customizado",
                "messageService-maskType-helptext": "O Tipo de Máscara define como o valor deve ser transformado." +
                                                    "<dl>" +
                                                        "<dt><b>Vazio:</b></dt>" +
                                                        "<dd>O valor é definido como uma sequência vazia.</dd>" +
                                                        "<dt><b>Básico:</b></dt>" +
                                                        "<dd>O valor é substituído pela sequência fixa: \"XXXXX\".</dd>" +
                                                        "<dt><b>Digite:</b></dt>" +
                                                        "<dd>" +
                                                            "O valor é substituído por uma máscara em que cada:" +
                                                            "<ul>" +
                                                                "<li>caractere minúsculo é substituído por: \"x\",</li>" +
                                                                "<li>caractere maiúsculo é substituído por: \"X\",</li>" +
                                                                "<li>número é substituído por: \"9\",</li>" +
                                                                "<li>símbolo é substituído por: \"@\".</li>" +
                                                            "</ul>" +
                                                            "Assim, a sequência: \"HelloWorld123\" torna-se: \"XxxxxXxxxx999\"" +
                                                        "</dd>" +
                                                        "<dt><b>Customizado:</b></dt>" +
                                                        "<dd>O valor é substituído pelo valor de retorno de uma função customizada que precisa ser gravada na caixa de texto MaskFunction.</dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "Função de Máscara",
                "messageService-maskFunction-helptext": "A função JavaScript que aceita uma sequência sem máscara e retorna o valor mascarado.",
                "messageService-addConfiguration": "Inclui a configuração de privacidade",
				"messageService-cssSelector": "Seletor CSS",
				"messageService-cssSelector-helptext": "Inclua uma sequência de seletor CSS única",
				"services-message-privacy-cssSelector-placeholder": "Inclua a sequência de seletor CSS aqui",
				"messageService-removePrivacyConfigurationTarget": "Remover destino",
				"messageService-removePrivacyConfiguration": "Remover configuração de privacidade",

                "serializer-header": "Configuração de serviço do serializador",
                "serializer-defaultToBuiltin": "Use o analisador sintático/serializador integrado se nenhum estiver disponível",
                "serializer-defaultToBuiltin-helptext": "O UIC vem com sua própria implementação básica de um analisador sintático/serializador JSON. A escolha do analisador sintático/serializador JSON é feita como a seguir:<br />" +
                                                        "<ol>" +
                                                          "<li>Se um analisador sintático/serializador JSON for especificado explicitamente na configuração abaixo, o UIC irá usá-lo." +
                                                          "<li>Se nenhum analisador sintático/serializador JSON for especificado explicitamente na configuração abaixo, o UIC fará uma verificação para ver se o navegador tem suporte nativo para JSON." +
                                                          "<li>Se o navegador não suportar JSON nativamente e esta caixa de seleção estiver marcada, o UIC usará sua implementação básica do JSON." +
                                                          "<li>Se nenhuma das opções acima for aplicável, o UIC falhará silenciosamente." +
                                                        "</ol>",
                "serializer-parsers": "Analisadores",
                "serializer-parsers-helptext": "A lista contém as funções do analisador sintático que o UIC deve usar (por exemplo, JSON.parse). A primeira é a mais importante. Se o UIC não localizá-la, ele tentará a próxima (se especificado) e assim por diante.",
                "serializer-parser": "Analisador sintático",
                "serializer-addParser": "Incluir outro analisador sintático",
                "serializer-stringifiers": "Serializadores",
                "serializer-stringifiers-helptext": "A lista contém as funções do serializador que o UIC deve usar (por exemplo, JSON.stringify). A primeira é a mais importante. Se o UIC não localizá-la, ele tentará a próxima (se especificado) e assim por diante.",
                "serializer-stringifier": "Serializador",
                "serializer-addStringifier": "Incluir outro serializador",

				"encoder-header": "Configuração de serviço do codificador",
				"encoder": "Codificador",
				"encoder-enable": "Ativar",
                "encoder-enable-helptext": "Ativar este serviço para permitir que o UIC aplique a compactação gzip nos dados da solicitação. Observe que o serviço do Codificador depende que a biblioteca de software livre 'pako' seja incluída e inicializada na página antes de o UIC ser inicializado. Para obter mais informações sobre 'pako' incluindo downloads, consulte: https://github.com/nodeca/pako",
				"encoder-encode": "Codificar",
				"encoder-defaultEncoding": "Codificação Padrão",
				"encoder-helptext": "Configure o serviço de codificador de compactação. Por padrão, gzip é configurado.",
				"encoder-defaultEncoding-helptext": "O tipo de codificação que será especificado pelo UIC no cabeçalho da solicitação HTTP. Por padrão, 'Codificação por conteúdo: gzip'.",
				"encoder-encode-helptext": "O caminho para o codificador. Por padrão, 'window.pako.gzip'.",

                "modules-header": "Módulos",
                "modules-subHeader": "Selecione os módulos ativados",
                "modules-performance": "desempenho",
                "modules-performance-helptext": "Propriedades de Sincronização de Navegação do W3C",
                "modules-PerformanceSettings": "Configurações de Desempenho",
                "modules-replay": "reproduzir",
                "modules-replay-helptext": "Monitoramento de interação com o usuário para ativar a criação de eventos baseada em reprodução, usabilidade e etapas.",
				"modules-usability": "Usability",
				"modules-usability-helptext": "Inclui os eventos mouseout, mousemove e click usability na configuração.",
                "modules-moduleBaseURL": "URL do moduleBase:",
                "modules-moduleBaseURL-helptext": "Localização no servidor a partir do qual os módulos podem ser carregados dinamicamente. Esta opção não é usada na liberação atual.",
                "modules-replay-events": "Reproduzir Eventos",
                "modules-hover-tracking": "Ativar rastreamento de ajuda instantânea",
                "modules-mobile-events": "Ativar eventos móveis",
                "modules-hashchange": "Ativar screenviews a partir de hashchange",
                "modules-scroll-winsize": "Ativar rolagem e rastreamento de tamanho da janela",
				"modules-navigationStart-helptext": "Este atributo deve retornar o horário imediatamente após o agente do usuário concluir a solicitação para descarregar o documento anterior. Se não houver documento anterior, este atributo deve retornar o mesmo valor que fetchStart.",
				"modules-unloadEventStart-helptext": "Se o documento anterior e o documento atual tiverem a mesma origem [IETF RFC 6454], este atributo deve retornar o horário imediatamente antes de o agente do usuário iniciar o evento de descarregamento do documento anterior. Se não houver documento anterior ou o documento anterior tiver uma origem diferente que a do documento atual, este atributo deve retornar zero.",
				"modules-unloadEventEnd-helptext": "Se o documento anterior e o documento atual tiverem a mesma origem, este atributo deve retornar o horário imediatamente após o agente do usuário concluir o evento de descarregamento do documento anterior. Se não houver documento anterior ou o documento anterior tiver uma origem diferente que a do documento atual ou o descarregamento ainda não tiver sido concluído, este atributo deve retornar zero. Se houver redirecionamentos de HTTP ou equivalentes ao navegar, e nem todos os redirecionamentos ou equivalentes forem da mesma origem, tanto unloadEventStart como unloadEventEnd devem retornar o zero.",
				"modules-redirectStart-helptext": "Se houver redirecionamentos de HTTP ou equivalentes ao navegar, e se todos os redirecionamentos ou equivalentes forem da mesma origem, este atributo deve retornar o horário inicial da busca que inicia o redirecionamento. Caso contrário, este atributo deve retornar zero.",
				"modules-redirectEnd-helptext": "Se houver redirecionamentos de HTTP ou equivalentes ao navegar, e todos os redirecionamentos ou equivalentes forem da mesma origem, este atributo deve retornar o horário imediatamente após o recebimento do último byte da resposta do último redirecionamento. Caso contrário, este atributo deve retornar zero.",
				"modules-fetchStart-helptext": "Se o novo recurso tiver que ser pesquisado usando HTTP GET ou equivalente, fetchStart deve retornar o horário imediatamente antes de o agente do usuário iniciar a verificação de qualquer cache de aplicativo relevante. Caso contrário, ele deve retornar o horário de quando o agente do usuário inicia a busca pelo recurso.",
				"modules-domainLookupStart-helptext": "Este atributo deve retornar o horário imediatamente antes de o agente do usuário iniciar a consulta de nome de domínio para o documento atual. Se uma conexão persistente [RFC 2616] for usada ou o documento atual for recuperado a partir de caches de aplicativo relevante ou recursos locais, este atributo deve retornar o mesmo valor que fetchStart.",
				"modules-domainLookupEnd-helptext": "Este atributo deve retornar o horário imediatamente após o agente do usuário concluir a consulta de nome de domínio para o documento atual. Se uma conexão persistente [RFC 2616] for usada ou o documento atual for recuperado a partir de caches de aplicativo relevante ou recursos locais, este atributo deve retornar o mesmo valor que fetchStart.",
				"modules-connectStart-helptext": "Este atributo deve retornar o horário imediatamente antes de o agente do usuário iniciar o estabelecimento da conexão com o servidor para recuperar o documento. Se uma conexão persistente [RFC 2616] for usada ou o documento atual for recuperado a partir de caches de aplicativo relevante ou recursos locais, este atributo deve retornar o valor de domainLookupEnd.",
				"modules-connectEnd-helptext": "Este atributo deve retornar o horário imediatamente após o agente do usuário concluir o estabelecimento da conexão com o servidor para recuperar o documento atual. Se uma conexão persistente [RFC 2616] for usada ou o documento atual for recuperado a partir de caches de aplicativo relevante ou recursos locais, este atributo deve retornar o valor de domainLookupEnd. Se a conexão de transporte falhar e o agente do usuário reabrir uma conexão, connectStart e connectEnd devem retornar os valores correspondentes da nova conexão. connectEnd deve incluir o intervalo de tempo para estabelecer a conexão de transporte, bem como outro intervalo de tempo, como handshake SSL e autenticação SOCKS.",
				"modules-secureConnectionStart-helptext": "Este atributo é opcional. Os agentes do usuário que não têm este atributo disponível devem configurá-lo como indefinido. Quando este atributo estiver disponível, se o esquema da página atual for HTTPS, este atributo deve retornar o horário imediatamente antes de o agente do usuário iniciar o processo de handshake para assegurar a conexão atual. Se este atributo estiver disponível, mas HTTPS não for usado, este atributo deve retornar zero.",
				"modules-requestStart-helptext": "Este atributo deve retornar o horário imediatamente antes de o agente do usuário iniciar a solicitação do documento atual a partir do servidor, de caches de aplicativo relevante ou de recursos locais. Se a conexão de transporte falhar após uma solicitação ser enviada e o agente do usuário reabrir uma conexão e reenviar a solicitação, requestStart deve retornar os valores correspondentes da nova solicitação.",
				"modules-responseStart-helptext": "Este atributo deve retornar o horário imediatamente após o agente do usuário receber o primeiro byte da resposta do servidor, de caches de aplicativo relevante ou dos recursos locais.",
				"modules-responseEnd-helptext": "Este atributo deve retornar o horário imediatamente após o agente do usuário receber o último byte do documento atual ou imediatamente antes da conexão de transporte ser fechada, o que vier primeiro. O documento aqui pode ser recebido do servidor, de caches do aplicativo relevante ou de recursos locais.",
				"modules-domLoading-helptext": "Este atributo deve retornar o horário imediatamente antes de o agente do usuário configurar a prontidão do documento atual como 'carregando'",
				"modules-domInteractive-helptext": "Este atributo deve retornar o horário imediatamente antes de o agente do usuário configurar a prontidão do documento atual como 'interativo'",
				"modules-domContentLoadedEventStart-helptext": "Este atributo deve retornar o horário imediatamente antes de o agente do usuário disparar o evento DOMContentLoaded no Documento.",
				"modules-domContentLoadedEventEnd-helptext": "Este atributo deve retornar o horário imediatamente após o evento DOMContentLoaded do documento ser concluído.",
				"modules-domComplete-helptext": "Este atributo deve retornar o horário imediatamente antes de o agente do usuário configurar a prontidão do documento atual como 'concluído' Se a prontidão do documento atual for alterada para o mesmo estado várias vezes, domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd e domComplete devem retornar o horário da primeira ocorrência de mudança da prontidão do documento correspondente.",
				"modules-loadEventStart-helptext": "Este atributo deve retornar o horário imediatamente antes do evento de carregamento do documento atual ser disparado. Ele deve retornar zero quando o evento de carregamento ainda não tiver sido disparado.",
				"modules-loadEventEnd-helptext": "Este atributo deve retornar o horário de quando o evento de carregamento do documento atual é concluído. Ele deve retornar zero quando o evento de carregamento não tiver sido disparado ou não estiver concluído.",
				"modules-mobile-events-helptext": "Ativa a reprodução de eventos a partir de sessões móveis.",
				"modules-hashchange-helptext": "Quando ativada, esta opção gera eventos de visão da tela quando uma hashchange tiver sido identificada na URL da página. Um evento de visão da tela é inserido nos dados da sessão, e os eventos de UI capturados por Captura de UI podem ser organizados abaixo da visão da tela na qual eles ocorreram.",
				"modules-scroll-winsize-helptext": "NOTA: Dependendo de seu aplicativo, a rolagem da janela de rastreamento pode gerar um número significante de eventos. A reprodução de eventos de rolagem capturados do cliente é suportada para sessões móveis apenas no BBR.",

                "performance-calculateRenderTime": "Calcule o tempo de renderização para navegadores que não suportam a Sincronização de Navegação do W3C",
                "performance-calculateRenderTime-helptext": "O tempo de renderização é calculado medindo a diferença do tempo <br>entre o carregamento da página e da biblioteca.",
                "performance-calculateRenderTime-description": "Quando esta configuração for ativada, a biblioteca calculará o tempo de renderização como uma diferença entre seu tempo de carregamento e o tempo de carregamento da página. Para obter medidas precisas, assegure-se de que a biblioteca seja carregada tão cedo quanto possível no ciclo de carregamento de página.",
				"performance-renderTimeThreshold": "renderTimeThreshold: ",
				"performance-renderTimeThreshold-helptext": "O tempo máximo de renderização em milissegundos. O padrão é 10 minutos <br>(600000 milisegundos). Qualquer tempo de renderização medido que exceda <br>o limite é relatado como 'invalidRenderTime' e não é incluído <br>nos relatórios de desempenho de tempo de renderização.",

				"replay-customEventName-placeholder": "Insira um nome de evento único, por exemplo, mousedown",
				"replay-customEventTarget-placeholder": "Insira um seletor CSS ao elemento de destino.",
				"replay-customEvent": "Evento de Reprodução Customizado",
				"replay-customEvent-helptext": "Insira o seletor CSS para o elemento de destino delegado, OU documento OU janela",
				"replay-addCustomDelegate": "Inclua o Evento de Reprodução Customizado",
				"replay-customEvent-name": "Nome do Evento",
				"replay-customEvent-target": "Destino de Eventos",
				"replay-customEvent-name-helptext": "Insira o nome do evento aqui, por exemplo, mousedown",
				"replay-customEvent-target-helptext": "Insira o seletor CSS para o(s) elemento(s) de destino, OU documento OU janela",
				"replay-customEvent-delegateTarget": "Destino Delegado de Evento (opcional)",
				"replay-customEvent-delegateTarget-helptext": "Insira o seletor CSS para o elemento de destino delegado, OU documento OU janela. Essa configuração é opcional.",
				"replay-customEvent-recurseFrames": "Estruturas de recurso (opcional)",
				"replay-customEvent-recurseFrames-helptext": "Se marcado, aplica um listener do evento para as estruturas/iframes filhas do documento. Essa configuração é opcional.",
                "replay-customEvent-state": "Estado",
                "replay-customEventState-placeholder": "Insira a propriedade a ser usada como o estado para o evento customizado",
                "replay-customEvent-state-helptext": "Especifica como o valor target.currState é configurado no JSON somente para eventos de reprodução customizados.",
				"replay-removeCustomEvent": "Remover Reprodução Customizada",

				"domCapture-header": "DOM Capture",
				"domCapture-enabled": "Ativar DOM Capture",
				"domCapture-enabled-helptext": "AVISO: Ativar a DOM Capture tem implicações significativas sobre a transmissão de dados e infraestrutura. Assim, este recurso deve ser ativado judiciosamente. Se ativado, ele requer configuração adicional para executar apenas a DOM Capture com base em eventos e elementos específicos. Consulte a documentação para obter mais detalhes.",
				"domCapture-captureFrames": "Capturar estruturas",
				"domCapture-captureFrames-helptext": "Se marcado, as estruturas e iframes filhas serão capturadas. NOTA: Somente o conteúdo com fonte no mesmo domínio que a própria página-pai pode ser capturado.",
				"domCapture-removeScripts": "Remover scripts",
				"domCapture-removeScripts-helptext": "Se todos os scripts estiverem marcados, as tags serão removidas da captura instantânea.",
                "domCapture-diffEnabled": "Ativar Diffs do DOM",
                "domCapture-diffEnabled-helptext": "Se o DOM estiver marcado, os diffs serão enviados após a captura instantânea inicial do DOM completo. É recomendado ativar esta configuração.",
                "domCapture-maxLength": "Comprimento Máximo",
                "domCapture-maxLength-helptext": "Se este limite for excedido, a captura instantânea não será enviada.",
                "domCapture-maxMutations": "Mutações Máximas",
                "domCapture-maxMutations-helptext": "Se este limite for atingido ou excedido, uma captura instantânea integral do DOM será executada ao invés de um diff. Use esta configuração para ajustar sua configuração de Captura do DOM e estabelecer um limite de segurança que evitará gargalos de desempenho devido ao processamento de mutações excessivas do DOM.",
				"domCapture-subHeader": "Incluir Acionadores do DOM Capture",
				"domCapture-trigger": "Acionador",
				"domCapture-addTrigger": "Incluir Acionador",
				"domCapture-event": "Evento",
				"domCapture-event-helptext": "Os eventos disponíveis são: carregar, descarregar, clicar ou alterar.",
				"domCapture-screenview": "Visão da tela",
				"domCapture-addScreenview": "Incluir visão da tela",
				"domCapture-removeScreenview": "Remover visão da tela",
				"domCapture-delay": "Atraso",
				"domCapture-delay-helptext": "Atraso opcional (em milisegundos) após o qual a captura instantânea do DOM deve ser executada.",
				"domCapture-delay-placeholder": "Inserir um número",
                "domCapture-fullDOMCapture": "Captura do DOM Integral",
                "domCapture-fullDOMCapture-helptext": "Se marcado, uma captura instantânea do DOM integral será executada para este acionador.",
				"domCapture-removeTrigger": "Remover Acionador",
				"domCapture-addTarget": "Incluir destino",
				"domCapture-removeTarget": "Remover destino",
				"domCapture-target": "Destino",
				"domCapture-target-id": "ID",
				"domCapture-target-id-helptext": "O ID do destino conforme o especificado dos três tipos de ID.",
				"domCapture-target-idType": "Tipo de ID",
				"domCapture-target-idType-helptext": "O ID HTML, XPath ou ID Customizado do elemento.",
				"domCapture-target-cssSelector": "Seletor CSS",
				"domCapture-target-cssSelector-helptext": "Inclua uma sequência de seletor CSS única.",
                "domCapture-load": "carregar",
                "domCapture-unload": "descarregar",
                "domCapture-click": "clicar",
                "domCapture-change": "alterar",
                "domCapture-custom": "customizar",
                "domCapture-custom-eventName": "Nome do Evento Customizado:",

                "DCCookie-header": "Gerenciamento de Cookie e Sessão",
                "DCCookie-enabled": "Ativar módulo DCCookie",
                "DCCookie-enabled-helptext": "O módulo DCCookie permite a configuração da Chave do Aplicativo e do cookie de Sessionalização. Estes são requeridos ao usar o serviço SaaS do Discover. Para obter informações adicionais, consulte a documentação de SaaS do Discover.",
                "DCCookie-dcAppKey": "Chave do aplicativo",
                "DCCookie-dcAppKey-helptext": "Insira a Chave do Aplicativo SaaS do Discover neste campo.",
                "DCCookie-sessionCookie": "Nome do cookie de sessionalização",
                "DCCookie-sessionCookie-helptext": "Especifique o cookie que está sendo usado para sessionalização. Especificar <strong>DCXSID</strong> como o cookie de sessionalização fará com que o UIC crie o cookie se ele não existir ainda.",
                
                "geolocation-header": "Geolocalização",
                "geolocation-enable": "Ativar criação de log de geolocalização",
                "geolocation-load": "Geolocalização durante o evento de carregamento",
                "geolocation-load-helptext": "Ativará a criação de log de geolocalização durante o evento de carregamento",
                "geolocation-helptext": "A criação de log de geolocalização relata a latitude, longitude e precisão das medidas, se disponíveis.",

                "misc-header": "Configurações Diversas",
                "sessionData-options": "Opções de compartilhamento de dados da sessão",
                "sessionData-Enable": "Compartilhar dados da sessão",
                "sessionData-Enable-description": "Selecionar esta opção ativará o compartilhamento de dados da sessão com outros scripts na página. Consulte a documentação para obter detalhes.",
                "sessionData-Enable-helptext": "Selecionar esta opção ativará o compartilhamento de dados da sessão com outros scripts na página. Consulte a documentação para obter detalhes.",
                "sessionId-Cookie": "Cookie",
                "sessionId-Cookie-description": "Selecione esta opção se um cookie for usado para sessionalização.",
                "sessionId-Cookie-helptext": "Selecione esta opção se um cookie for usado para sessionalização.",
                "sessionId-Query": "Parâmetro de Consulta",
                "sessionId-Query-description": "Selecione esta opção se um parâmetro de consulta for usado para sessionalização.",
                "sessionId-Query-helptext": "Selecione esta opção se um parâmetro de consulta for usado para sessionalização.",
                "sessionId-Cookie-Name": "Nome do Cookie",
                "sessionId-Cookie-Name-helptext": "O nome do cookie sendo usado para sessionalização. Por exemplo, DCXSID, jsessionid, e assim por diante.",
                "sessionId-Query-Name": "Nome do Parâmetro da Consulta",
                "sessionId-Query-Name-helptext": "O nome (por exemplo, LHS) do parâmetro de consulta sendo usado para a sessionalização.",
                "sessionId-Query-Delimiter": "Delimitador de sequência de consultas",
                "sessionId-Query-Delimiter-helptext": "Especifique o delimitador de sequência de consultas que está sendo usado pelo aplicativo. O padrão é &",
                "sessionId-ValueNeedsHashing": "O valor precisa de hashing",
                "sessionId-ValueNeedsHashingDescription": "Selecione esta opção se for necessário executar hash no valor para derivar o ID de Sessão.",
                "misc-frames-blacklist-label": "Estruturas incluídas na lista de bloqueio",
                "misc-frames-blacklist-helptext": "Seletores CSS de estruturas excluídas da coleta de dados.",
                "misc-frames-blacklist-placeholder": "Seletores CSS separados por espaço vírgula espaço.",

                "regextester-headline": "Teste suas expressões regulares",
                "regextester-regex": "RegEx",
                "regextester-flag-i": "Sem distinção entre maiúsculas e minúsculas (i)",
                "regextester-flag-g": "Global (g)",
                "regextester-sample": "Amostra de teste",
                "regextester-matches": "Corresponde?",
                "regextester-copylabel": "(pronto para copiar&colar na configuração)",
                "regextester-btn-test": "Teste",

                "unsupported-header": "Infelizmente, seu navegador é muito antigo ou não suportado.",
                "unsupported-sudHeader": "Use um dos navegadores a seguir:",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "(Versão 17.0 e superior)",
                "unsupported-safari-versioninfo": "(Versão 6.0 e superior)",

                "validation-timerinterval": "O intervalo de cronômetro não é válido. Insira um número entre 1000 e 600000.",
                "validation-maxevents": "Tamanho (Máx. de mensagens) não é válido. Insira um número entre 1 e 100.",
                "validation-renderTimeThreshold": "O limite de tempo do renderizador não é válido, insira um número.",
                "validation-maxSize": "Tamanho (Máx. de comprimento serializado) não é válido. Insira um número entre 4000 e 1000000.",

                "reload-page": "Recarregue a página para a mudança de idioma entrar em vigor."
            }

,
            ru: // NLS_CHARSET=UTF-8
{
                "site-title": "Мастер конфигурирования UIC",
                "page-headline": "Мастер конфигурирования UIC",
				"uic-version": "Версия UIC ",
                "advanced-options": "Дополнительные опции",
                "btn-prev": "Назад",
                "btn-next": "Далее",
                "btn-finish": "Готово",
                "btn-reset": "Восстановить значения по умолчанию",
                "btn-regextester": "Средство тестирования RegEx",

                "library-type-prod-min": "Производственная сборка (уменьшенная)",
                "library-type-prod": "Производственная сборка (не уменьшенная)",
                "library-type-dev": "Сборка для разработки (не уменьшенная)",

                "core-inactivityTimeout": "Тайм-аут бездействия (миллисекунды)",
                "core-inactivityTimeout-helptext": "Тайм-аут бездействия задает время, по истечении которого UIC прекращает работу, если за это время не было ни одного действия пользователя. " +
                                                   "Если тайм-аут бездействия не задан, то используется встроенное значение (10 минут). " +
                                                   "<br /><em>Примечание:</em> Если задано 0, то эта функция отключается. Это не рекомендуется, так как может привести к несвязанным попаданиями интерфейса пользователя.",

                "browserService-header": "Конфигурация службы браузера",
                "browserService-subHeader": "Выбрать разновидность:",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "Разновидность jQuery поддерживается, ТОЛЬКО если веб-приложение использует jQuery 1.7 или новее.",
                "browserService-jQuery-description": "Разновидность jQuery библиотеки UIC использует API jQuery для доступа DOM в разных браузерах.",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "Для всех остальных.",
                "browserService-w3c-description": "Разновидность W3C библиотеки UIC непосредственно использует API DOM браузера." +
                                                  "<br /><em>Примечание:</em> Для разновидности W3C также необходимо, чтобы была включена библиотека Sizzle JS третьей стороны. Смотрите раздел, касающийся URL Sizzle, в дополнительных опциях.",

                "browserService-useCapture": "Использовать фазу захвата для приема событий",
                "browserService-useCapture-helptext": "Разрешает использование фазы захвата событий при регистрации приемников событий. Если это запрещено, то используется всплытие событий; это может привести к пропуску событий, если для них запрещено всплытие. Рекомендуется разрешить этот параметр." +
                                                      "<br /><em>Примечание:</em> Старые версии Internet Explorer (IE 8 и ниже) не поддерживают фазу захвата событий, и для них автоматически используется всплытие событий." +
                                                      "<br />Дополнительную информацию об этом параметре смотрите в спецификации W3C DOM: http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture",
                "browserService-sizzleObject": "Объект Sizzle",
                "browserService-sizzleObject-helptext": "Путь объекта Sizzle. Если он пропущен, по умолчанию используется window.Sizzle." +
                                                        "<br /><br /><em>Примечание:</em> Sizzle требуется для правильной работы библиотеки в прежних браузерах Internet Explorer (IE 8 и старее) при использовании службы W3C." +
                                                        " Если приложение использует любую версию jQuery, вам не нужно включать отдельный компонент Sizzle, так как jQuery уже содержит Sizzle." +
                                                        " Sizzle можно скачать с http://sizzlejs.com/",
                "browserService-jQueryObject": "Объект jQuery",
                "browserService-jQueryObject-helptext": "Путь объекта jQuery. Если он пропущен, по умолчанию используется window.jQuery.",
                "browserService-blacklistedElements": "Элементы в черном списке",
                "browserService-blacklistedElements-placeholder": "ID или регулярные выражения, разделенные пробелом, запятой и пробелом.",
                "browserService-blacklistedElements-helptext": "Поместите в черный список все ID элементов, которые являются не уникальными и/или динамически генерируемыми. ID элементов, которые соответствуют любой из записей черного списка, будут заменены на значения пользовательских атрибутов или XPATH." +
                                                               "<br /><br />Совет: Используйте функцию проверки RegEx, чтобы проверить все регулярные выражения, используемые, чтобы сконфигурировать черный список.",
                "browserService-customID": "ID пользовательского атрибута",
                "browserService-customID-placeholder": "Имя атрибута.",
                "browserService-customID-helptext": "Один или несколько атрибутов, которые можно использовать, чтобы уникальным образом идентифицировать элемент, когда его ID HTML недоступен или внесен в черный список.",
				"browserService-ieExcludedLinks": "Ссылки, исключенные в Internet Explorer",
				"browserService-ieExcludedLinks-placeholder": "Селекторы CSS, разделенные запятыми.",
				"browserService-ieExcludedLinks-helptext": "Эта конфигурация задана как массив селекторов CSS. Например, конфигурацию можно задать следующим образом: " +
															" a[href^='javascript:'] " +
															"чтобы проигнорировать действие beforeunload, инициируемое следующей ссылкой: < a href='javascript:void(0);'>Щелкните здесь< /a>" +
															"<br/>ПРИМЕЧАНИЕ: Если задан недопустимый символ (например, $), перед которым не поставлены управляющие символы \\, возникнет исключительная ситуация в браузерах Chrome и Webkit.",
                "queueService-header": "Конфигурация службы очередей",
                "queueService-subHeader": "Сконфигурировать внутреннюю очередь библиотеки",
                "queueService-queueName": "Имя",
                "queueService-queueName-helptext": "В этом выпуске поддерживается только одна очередь. Именем очереди ДОЛЖНО быть значение 'DEFAULT'. Не изменяйте это значение.",
                "queueService-queueEndpoint": "Конечная точка (страница Назначение)",
                "queueService-queueEndpoint-helptext": "URL страницы назначения на веб-сервере, на котором будут размещены захваченные данные. В этом выпуске междоменные URL не поддерживаются.",
                "queueService-queueSize-events": "Размер (максимальное число сообщений)",
                "queueService-queueSize-events-helptext": "Порог, по достижении которого очередь будет очищена. Рекомендуемые значения: 1-50 для тестирования и 20-50 для производственного внедрения.",
                "queueService-queueSize-serialized": "Размер (максимальная сериализованная длина)",
                "queueService-queueSize-serialized-helptext": "Порог длины сериализованной очереди, по достижении которого очередь будет очищена. Рекомендуемые значения: 8000-20000 для производственного внедрения." +
                                                    "<br/>ПРИМЕЧАНИЕ: Если используется кодировка gzip, то значение нужно увеличить, чтобы отразить предельный размер до кодировки." +
                                                    "<br/>ПРЕДУПРЕЖДЕНИЕ: Если этот параметр разрешен, то в некоторых случаях может снизиться производительность, так как при этом для проверки порога используется сериализация очереди.",
                "queueService-queueSize-serialized-label": " (значение 0 запрещает этот параметр)",
                "queueService-queueTimer": "Интервал таймера (миллисекунды)",
                "queueService-queueTimer-label": " миллисекунд (значение 0 запрещает таймер)",
                "queueService-queueTimer-helptext": "Чтобы включить сценарии теневых браузеров, можно задать значение таймера, так чтобы периодически производилась очистка очереди независимо от числа сообщений. В большинстве других случаев лучше оставить этот параметр выключенным.",

                "queueService-crossDomainEnabled": "Включить междоменные сообщения POST.",
                "queueService-crossDomainFrameSelector": "Междоменный селектор фреймов",
                "queueService-crossDomainFrameSelector-helptext": "Междоменный селектор фреймов должен задавать элемент iframe или элемент фрейма на странице, сконфигурированной для требований POST.",

				"queueService-asyncReqOnUnload": "Включите асинхронный XHR при выгрузке страницы.",
				"queueService-asyncReqOnUnload-helptext": "Включите эту опцию, чтобы включить асинхронное требование при выгрузке страницы.<br />ПРЕДУПРЕЖДЕНИЕ: При включении асинхронного требования при выгрузке страницы может привести к неполным или отсутствующим данным.",

                "queueService-checkEndpoint": "Проверка конечной точки",
                "queueService-checkEndpoint-helptext": "Отправить асинхронное требование, чтобы проверить, доступна ли конечная точка Discover.",
                "queueService-endpointCheckTimeout": "Проверка тайм-аута конечной точки",
                "queueService-endpointCheckTimeout-helptext": "Тайм-аут асинхронного требования, проверяющего, доступна ли конечная точка Discover.",

                "queueService-queueSerializer": "Сериализатор",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "Поддерживается только сериализация JSON.",
                "queueService-addQueue": "Добавить другую очередь",

                "messageService-header": "Конфигурация службы сообщений",
                "messageService-subHeader": "Конфигурация маски конфиденциальности",
                "messageService-targets": "Назначения",
                "messageService-id": "ID",
                "messageService-id-helptext": "HTML ID, XPath или ID пользовательского атрибута ('имя_атрибута=значение_атрибута') элемента, который нужно замаскировать.",
                "messageService-idType": "Тип ID",
                "messageService-idType--1": "HTML ID",
                "messageService-idType--2": "xPath",
                "messageService-idType--3": "ID пользовательского атрибута",
                "messageService-idType-helptext": "Выберите правильный тип ID.",
                "messageService-addTarget": "Добавить другой объект назначения",
                "messageService-maskType": "Тип маски",
                "messageService-maskType-1": "Пусто",
                "messageService-maskType-2": "Базовый",
                "messageService-maskType-3": "Тип",
                "messageService-maskType-4": "Пользовательский",
                "messageService-maskType-helptext": "Тип маски указывает, как следует преобразовать значение." +
                                                    "<dl>" +
                                                        "<dt><b>Пустой:</b></dt>" +
                                                        "<dd>В качестве значения будет задана пустая строка.</dd>" +
                                                        "<dt><b>Базовый:</b></dt>" +
                                                        "<dd>Значение заменяется фиксированной строкой: \"XXXXX\".</dd>" +
                                                        "<dt><b>Тип:</b></dt>" +
                                                        "<dd>" +
                                                            "Значение заменяется маской, где:" +
                                                            "<ul>" +
                                                                "<li>каждый символ нижнего регистра заменяется символом \"x\",</li>" +
                                                                "<li>каждый символ верхнего регистра заменяется символом \"X\",</li>" +
                                                                "<li>каждое число заменяется символом: \"9\",</li>" +
                                                                "<li>каждый знак заменяется символом: \"@\".</li>" +
                                                            "</ul>" +
                                                            "Таким образом, строка \"HelloWorld123\" превратится в \"XxxxxXxxxx999\"" +
                                                        "</dd>" +
                                                        "<dt><b>Пользовательский:</b></dt>" +
                                                        "<dd>Значение заменяется возвращенным значением пользовательской функции, которую нужно записать в текстовое поле Функция маскировки.</dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "Функция маскировки",
                "messageService-maskFunction-helptext": "Функция JavaScript, которая принимает незамаскированную строку и возвращает замаскированное значение.",
                "messageService-addConfiguration": "Добавить конфигурацию конфиденциальности",
				"messageService-cssSelector": "Селектор CSS",
				"messageService-cssSelector-helptext": "Добавить одну строку селектора CSS",
				"services-message-privacy-cssSelector-placeholder": "Добавьте сюда строку селектора CSS",
				"messageService-removePrivacyConfigurationTarget": "Удалить объект назначения",
				"messageService-removePrivacyConfiguration": "Удалить конфигурацию конфиденциальности",

                "serializer-header": "Конфигурация службы сериализатора",
                "serializer-defaultToBuiltin": "Использовать встроенный анализатор/сериализатор, если ничего не доступно",
                "serializer-defaultToBuiltin-helptext": "UIC поставляется со своей собственной базовой реализацией анализатора/сериализатора JSON. Выбор анализатора/сериализатора JSON осуществляется следующим образом:<br />" +
                                                        "<ol>" +
                                                          "<li>Если анализатор/сериализатор JSON явным образом задан в указанной ниже конфигурации, UIC будет его использовать." +
                                                          "<li>Если в указанной ниже конфигурации никакого анализатора/сериализатора не задано, UIC проверит, есть ли в браузере собственная поддержка JSON." +
                                                          "<li>Если в браузере нет собственной поддержки JSON, а этот переключатель включен, UIC будет использовать свою базовую реализацию JSON." +
                                                          "<li>Если ни один из приведенных выше вариантов не применим, UIC неудачно завершит работу без вывода сообщений." +
                                                        "</ol>",
                "serializer-parsers": "Анализаторы",
                "serializer-parsers-helptext": "Список содержит функции анализатора, которые должен использовать компонент UIC (например, JSON.parse). Самым важным является первый. Если компонент UIC его не найдет, он попробует использовать следующий (если он задан) и т.д.",
                "serializer-parser": "Анализатор",
                "serializer-addParser": "Добавить другой анализатор",
                "serializer-stringifiers": "Сериализаторы",
                "serializer-stringifiers-helptext": "Список содержит функции сериализатора, которые должен использовать компонент UIC (например, JSON.stringify). Самым важным является первый. Если компонент UIC его не найдет, он попробует использовать следующий (если он задан) и т.д.",
                "serializer-stringifier": "Сериализатор",
                "serializer-addStringifier": "Добавить другой сериализатор",

				"encoder-header": "Конфигурация службы кодировщика",
				"encoder": "Закодировать",
				"encoder-enable": "Включить",
                "encoder-enable-helptext": "Включите эту службу, чтобы разрешить UIC применять сжатие gzip для данных требования. Учтите, что служба кодировщика зависит от библиотеки 'pako' Open Source, которую нужно включить в страницу и инициализировать перед инициализацией UIC. Дополнительную информацию о 'pako', включая информацию о скачивании , смотрите на веб-странице https://github.com/nodeca/pako",
				"encoder-encode": "Закодировать",
				"encoder-defaultEncoding": "Кодировка по умолчанию",
				"encoder-helptext": "Сконфигурируйте службу кодировщика сжатия. По умолчанию сконфигурирована функция gzip.",
				"encoder-defaultEncoding-helptext": "Тип кодировки, который будет указан UIC в заголовке требования HTTP. По умолчанию, это 'Content-encoding: gzip'.",
				"encoder-encode-helptext": "Путь кодировщика. По умолчанию: 'window.pako.gzip'.",

                "modules-header": "Модули",
                "modules-subHeader": "Выбрать включенные модули",
                "modules-performance": "производительность",
                "modules-performance-helptext": "Свойства синхронизации навигации W3C",
                "modules-PerformanceSettings": "Параметры производительности",
                "modules-replay": "воспроизвести",
                "modules-replay-helptext": "Мониторинг взаимодействий с пользователем, чтобы обеспечить воспроизведение, возможность использования и поддержки событий на основе шагов.",
				"modules-usability": "Usability",
				"modules-usability-helptext": "Добавляет в конфигурацию события mouseout, mousemove и usability.",
                "modules-moduleBaseURL": "База модулей URL:",
                "modules-moduleBaseURL-helptext": "Расположение на сервере, из которого можно динамически загружать модули. В текущем выпуске эта опция не используется.",
                "modules-replay-events": "Воспроизвести события",
                "modules-hover-tracking": "Включить отслеживание наведения мыши",
                "modules-mobile-events": "Включить мобильные события",
                "modules-hashchange": "Включить представления экранов из изменения хеша",
                "modules-scroll-winsize": "Включить отслеживание прокрутки и размеров окна",
				"modules-navigationStart-helptext": "Этот атрибут должен возвратить время непосредственно после завершения агентом пользователя выполнения подсказки на выгрузку предыдущего документа. Если предыдущего документа нет, этот атрибут должен возвратить то же самое значение, что и fetchStart.",
				"modules-unloadEventStart-helptext": "Если у предыдущего документа и текущего документа один и тот же источник [IETF RFC 6454], этот атрибут должен возвратить время непосредственно перед началом поиска агентом пользователя выгруженного события предыдущего документа. Если предыдущего документа нет или если источник у предыдущего документа не совпадает с источником текущего документа, этот атрибут должен возвратить ноль.",
				"modules-unloadEventEnd-helptext": "Если у предыдущего документа и текущего документа один и тот же источник, этот атрибут должен возвратить время непосредственно после завершения агентом пользователя события выгрузки предыдущего документа. Если предыдущего документа нет или если источник у предыдущего документа не совпадает с источником текущего документа либо если выгрузка еще не завершилась, этот атрибут должен возвратить ноль. Если существуют перенаправления или эквиваленты HTTP при навигации, но не все перенаправления и эквиваленты относятся к одному и тому же источнику, то как unloadEventStart, так и unloadEventEnd должны возвратить ноль.",
				"modules-redirectStart-helptext": "Если существуют перенаправления или эквиваленты HTTP при навигации и если у всех перенаправлений и эквивалентов один и тот же источник, этот атрибут должен возвратить начальное время выборки, которая инициирует перенаправление. В противном случае атрибут должен возвратить нулевое значение.",
				"modules-redirectEnd-helptext": "Если существуют перенаправления или эквиваленты HTTP при навигации и у всех перенаправлений и эквивалентов один и тот же источник, этот атрибут должен возвратить время непосредственно после получения последнего байта ответа последнего перенаправления. В противном случае атрибут должен возвратить нулевое значение.",
				"modules-fetchStart-helptext": "Если новый ресурс нужно предоставить с использованием HTTP GET или эквивалентной команды, fetchStart должен возвратить время непосредственно перед началом проверки агентом пользователя всех соответствующих кэшей приложения. В противном случае он должен возвратить время, когда агент пользователя начнет выборку на ресурсе.",
				"modules-domainLookupStart-helptext": "Этот атрибут должен возвратить время непосредственно перед началом поиска агентом пользователя имени домена для текущего документа. Если используется хранимое соединение [RFC 2616] либо текущий документ получен из кэшей соответствующего приложения или локальных ресурсов, этот атрибут должен возвратить то же самое значение, что и fetchStart.",
				"modules-domainLookupEnd-helptext": "Этот атрибут должен возвратить время непосредственно после завершения агентом пользователя поиска имени домена для текущего документа. Если используется хранимое соединение [RFC 2616] либо текущий документ получен из кэшей соответствующего приложения или локальных ресурсов, этот атрибут должен возвратить то же самое значение, что и fetchStart.",
				"modules-connectStart-helptext": "Этот атрибут должен возвратить время непосредственно перед тем, как агент пользователя начнет устанавливать соединение с сервером для получения документа. Если используется хранимое соединение [RFC 2616] либо текущий документ получен из кэшей соответствующего приложения или локальных ресурсов, этот атрибут должен возвратить значение domainLookupEnd.",
				"modules-connectEnd-helptext": "Этот атрибут должен возвратить время непосредственно после завершения агентом пользователя установления соединения с сервером для получения текущего документа. Если используется хранимое соединение [RFC 2616] либо текущий документ получен из кэшей соответствующего приложения или локальных ресурсов, этот атрибут должен возвратить значение domainLookupEnd. Если транспортное соединение завершится неудачно и агент пользователя снова откроет соединение, connectStart и connectEnd должны возвратить соответствующие значения нового соединения. connectEnd должен содержать интервал времени для установления транспортного соединения, а также другой интервал времени, например, интервал для согласования SSL и аутентификации SOCKS.",
				"modules-secureConnectionStart-helptext": "Этот атрибут - необязательный. Агенты пользователей, у которых нет этого атрибута, должны присвоить ему значение 'Не задано'. Если этот атрибут доступен и если схемой текущей страницы является HTTPS, этот атрибут должен возвратить время непосредственно перед тем, как агент пользователя начнет процесс согласования для защиты текущего соединения. Если этот атрибут доступен, но HTTPS не используется, этот атрибут должен возвратить ноль.",
				"modules-requestStart-helptext": "Этот атрибут должен возвратить время непосредственно перед тем, как агент пользователя начнет требовать текущий документ с сервера либо из соответствующих кэшей приложения или из локальных ресурсов. Если транспортное соединение завершится неудачно после отправки требования и агент пользователя снова откроет соединение и заново отправит требование, requestStart должен возвратить соответствующие значения нового требования.",
				"modules-responseStart-helptext": "Этот атрибут должен возвратить время непосредственно после получения агентом пользователя первого байта ответа от сервера, из соответствующих кэшей прикладной программы или от локальных ресурсов.",
				"modules-responseEnd-helptext": "Этот атрибут должен возвратить время непосредственно после получения агентом пользователя последнего байта текущего документа или непосредственно перед закрытием соединения со службой транспорта в зависимости от того, что наступит раньше. Здесь документ может быть получен либо с сервера, из кэшей соответствующих приложений или из локальных ресурсов.",
				"modules-domLoading-helptext": "Этот атрибут должен возвратить время непосредственно перед тем, как агент пользователя отправляет для готовности текущего документа значение 'загружается'.",
				"modules-domInteractive-helptext": "Этот атрибут должен возвратить время непосредственно перед тем, как агент пользователя отправляет для готовности текущего документа значение 'интерактивный'.",
				"modules-domContentLoadedEventStart-helptext": "Этот атрибут должен возвратить время непосредственно перед запуском агентом пользователя события DOMContentLoaded в документе.",
				"modules-domContentLoadedEventEnd-helptext": "Этот атрибут должен возвратить время непосредственно после завершения события документа DOMContentLoaded.",
				"modules-domComplete-helptext": "Этот атрибут должен возвратить время непосредственно перед тем, как агент пользователя отправляет для готовности текущего документа значение 'выполнено'. Если готовность текущего документа несколько раз изменится до того же состояния, domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd и domComplete должны возвратить время первого изменения готовности соответствующего документа.",
				"modules-loadEventStart-helptext": "Этот атрибут должен возвратить время непосредственно перед запуском события загрузки текущего документа. Если событие загрузки еще не сработало, он должен возвратить ноль.",
				"modules-loadEventEnd-helptext": "Этот атрибут должен возвратить время, когда завершается событие загрузки текущего документа. Если событие загрузки еще не сработало или не завершилось, он должен возвратить ноль.",
				"modules-mobile-events-helptext": "Включает воспроизведение событий из мобильных сеансов.",
				"modules-hashchange-helptext": "Если эта опция включена, она генерирует события представления окна, когда идентифицируется изменение хеша в URL страницы. Событие представления окна вставляется в данные сеанса, и события пользовательского интерфейса, захваченные функцией захвата пользовательского интерфейса, можно организовать под представлением окна, в котором они произошли.",
				"modules-scroll-winsize-helptext": "ПРИМЕЧАНИЕ: В зависимости от вашего приложения прокрутка окна отслеживания может сгенерировать значительное число событий. Воспроизведение событий прокрутки, захваченных с клиента, поддерживается для мобильных сеансов только в BBR.",

                "performance-calculateRenderTime": "Вычислить время воспроизведения для браузеров, не поддерживающих синхронизацию навигации W3C",
                "performance-calculateRenderTime-helptext": "Время воспроизведения вычисляется путем измерения разницы во времени <br>между загрузкой страницы и загрузкой библиотеки.",
                "performance-calculateRenderTime-description": "Если этот параметр включен, библиотека будет вычислять время воспроизведения как разницу между временем своей загрузки и временем загрузки страницы. Для точных измерений убедитесь, что библиотека загружается как можно раньше в цикле загрузки страницы.",
				"performance-renderTimeThreshold": "renderTimeThreshold: ",
				"performance-renderTimeThreshold-helptext": "Максимальное время воспроизведения в миллисекундах. Значение по умолчанию - 10 минут <br>(600000 миллисекунд). Любое измеренное время воспроизведения, которое превысит <br>порог, будет сообщено как 'invalidRenderTime' и не будет включено в <br>отчеты об эффективности времени воспроизведения.",

				"replay-customEventName-placeholder": "Введите имя одного события, например, mousedown",
				"replay-customEventTarget-placeholder": "Введите селектор CSS для элемента назначения.",
				"replay-customEvent": "Пользовательское событие воспроизведения",
				"replay-customEvent-helptext": "Введите селектор CSS для делегированного элемента назначения ИЛИ документа ИЛИ окна",
				"replay-addCustomDelegate": "Добавить пользовательское событие воспроизведения",
				"replay-customEvent-name": "Имя события",
				"replay-customEvent-target": "Объект назначения события",
				"replay-customEvent-name-helptext": "Введите сюда имя события, например, mousedown",
				"replay-customEvent-target-helptext": "Введите селектор CSS для элементов назначения ИЛИ документа ИЛИ окна",
				"replay-customEvent-delegateTarget": "Объект назначения делегата события (необязательно)",
				"replay-customEvent-delegateTarget-helptext": "Введите селектор CSS для делегированного элемента назначения ИЛИ документа ИЛИ окна. Этот параметр - необязательный.",
				"replay-customEvent-recurseFrames": "Обращать фреймы (необязательно)",
				"replay-customEvent-recurseFrames-helptext": "Если эта опция включена, для дочерних фреймов/iframes документа применяется приемник. Этот параметр - необязательный.",
                "replay-customEvent-state": "Состояние",
                "replay-customEventState-placeholder": "Введите свойство, которое следует использовать как состояние для пользовательского события",
                "replay-customEvent-state-helptext": "Указывает, как значение target.currState задано в JSON только для событий пользовательского воспроизведения.",
				"replay-removeCustomEvent": "Удалить пользовательское воспроизведение",

				"domCapture-header": "Захват DOM",
				"domCapture-enabled": "Включить захват DOM",
				"domCapture-enabled-helptext": "Предупреждение: Включение захвата DOM заметно влияет на передачу данных и инфраструктуру. Поэтому эту функцию нужно включать с осмотрительностью. Если эта функция включена, то нужно выполнить дополнительное конфигурирование, чтобы захват DOM выполнялся только на основе конкретных событий и элементов. Дополнительную информацию смотрите в документации.",
				"domCapture-captureFrames": "Захватить фреймы",
				"domCapture-captureFrames-helptext": "Если эта опция включена, будут захвачены дочерние фреймы и iframes. Примечание: Можно захватить только контент, полученный из домена родительской страницы.",
				"domCapture-removeScripts": "Удалить сценарии",
				"domCapture-removeScripts-helptext": "Если эта опция включена, то все теги сценария будут удалены из захваченного снимка.",
                "domCapture-diffEnabled": "Разрешить различия DOM",
                "domCapture-diffEnabled-helptext": "Если выбрано, то после создания начального полного снимка DOM будут отправлены различия DOM. Рекомендуется разрешить этот параметр.",
                "domCapture-maxLength": "Максимальная длина",
                "domCapture-maxLength-helptext": "При превышении этого порога снимок не будет отправлен.",
                "domCapture-maxMutations": "Максимальное число изменений",
                "domCapture-maxMutations-helptext": "Если этот порог достигнут или превышен, то вместо дифференциального снимка DOM выполняется полный снимок. Используйте этот параметр для тонкой настройки конфигурации захвата DOM и для задания безопасного лимита, который предотвратит возникновение узких мест производительности из-за обработки избыточных изменений DOM.",
				"domCapture-subHeader": "Добавить триггеры захвата DOM",
				"domCapture-trigger": "Триггер",
				"domCapture-addTrigger": "Добавить триггер",
				"domCapture-event": "Событие",
				"domCapture-event-helptext": "Доступные события - это загрузить, выгрузить, щелкнуть или изменить.",
				"domCapture-screenview": "Представление окна",
				"domCapture-addScreenview": "Добавить представление окна",
				"domCapture-removeScreenview": "Удалить представление окна",
				"domCapture-delay": "Задержка",
				"domCapture-delay-helptext": "Необязательная задержка (в миллисекундах), после которой нужно будет сделать снимок DOM.",
				"domCapture-delay-placeholder": "Введите число",
                "domCapture-fullDOMCapture": "Полный захват DOM",
                "domCapture-fullDOMCapture-helptext": "Если выбрано, то для этого триггера будет сделан полный снимок DOM.",
				"domCapture-removeTrigger": "Удалить триггер",
				"domCapture-addTarget": "Добавить объект назначения",
				"domCapture-removeTarget": "Удалить объект назначения",
				"domCapture-target": "Назначение",
				"domCapture-target-id": "ID",
				"domCapture-target-id-helptext": "ID назначения, заданное из трех типов ID.",
				"domCapture-target-idType": "Тип ID",
				"domCapture-target-idType-helptext": "ID HTML, XPath или пользовательский ID элемента.",
				"domCapture-target-cssSelector": "Селектор CSS",
				"domCapture-target-cssSelector-helptext": "Добавьте одну строку селектора CSS.",
                "domCapture-load": "загрузить",
                "domCapture-unload": "выгрузить",
                "domCapture-click": "щелкнуть",
                "domCapture-change": "изменить",
                "domCapture-custom": "пользовательский",
                "domCapture-custom-eventName": "Имя пользовательского события:",

                "DCCookie-header": "Управление & сеансом cookie",
                "DCCookie-enabled": "Разрешить модуль DCCookie",
                "DCCookie-enabled-helptext": "Модуль DCCookie разрешает конфигурирование ключа приложения и cookie разделения по сеансам. Это требуется при использовании службы Discover SaaS. Дополнительную информацию смотрите в документации по Discover SaaS.",
                "DCCookie-dcAppKey": "Ключ приложения",
                "DCCookie-dcAppKey-helptext": "Введите в это поле ключ приложения Discover SaaS.",
                "DCCookie-sessionCookie": "Имя cookie разделения по сеансам",
                "DCCookie-sessionCookie-helptext": "Укажите cookie, используемое для разделения по сеансам. Если в качестве cookie разделения по сеансам указано <strong>DCXSID</strong>, то UIC создаст cookie, если оно не существует.",
                
                "geolocation-header": "Геопозиционирование",
                "geolocation-enable": "Включить ведение журнала геопозиционирования",
                "geolocation-load": "Геопозиционирование во время события загрузки",
                "geolocation-load-helptext": "Ведение журнала геопозиционирования будет включено во время события загрузки",
                "geolocation-helptext": "При записи в журнал геопозиционирования сообщается о широте, долготе и точности измерений, если эти значения доступны.",

                "misc-header": "Разные параметры",
                "sessionData-options": "Опции совместного использования данных сеанса",
                "sessionData-Enable": "Совместно использовать данные сеанса",
                "sessionData-Enable-description": "Если выбрать эту опцию, будет включено совместное использование данных сеанса с другими сценариями на странице. Подробную информацию смотрите в документации.",
                "sessionData-Enable-helptext": "Если выбрать эту опцию, будет включено совместное использование данных сеанса с другими сценариями на странице. Подробную информацию смотрите в документации.",
                "sessionId-Cookie": "Cookie",
                "sessionId-Cookie-description": "Выберите эту опцию, если для создания сеанса используется cookie.",
                "sessionId-Cookie-helptext": "Выберите эту опцию, если для создания сеанса используется cookie.",
                "sessionId-Query": "Параметр запроса",
                "sessionId-Query-description": "Выберите эту опцию, если для создания сеанса используется параметр запроса.",
                "sessionId-Query-helptext": "Выберите эту опцию, если для создания сеанса используется параметр запроса.",
                "sessionId-Cookie-Name": "Имя Cookie",
                "sessionId-Cookie-Name-helptext": "Имя cookie, используемого для создания сеансов. Например, DCXSID, jsessionid и т.п.",
                "sessionId-Query-Name": "Имя параметра запроса",
                "sessionId-Query-Name-helptext": "Имя (то есть, LHS) параметра запроса, используемого для создания сеансов.",
                "sessionId-Query-Delimiter": "Разделитель строк запроса",
                "sessionId-Query-Delimiter-helptext": "Задайте разделитель строк запроса, используемый приложением. По умолчанию: &",
                "sessionId-ValueNeedsHashing": "Значение требует хеширования",
                "sessionId-ValueNeedsHashingDescription": "Выберите эту опцию, если нужно произвести хеширование значения, чтобы получить ID сеанса.",
                "misc-frames-blacklist-label": "Фреймы в черном списке",
                "misc-frames-blacklist-helptext": "Селекторы CSS для фреймов исключены из сбора данных.",
                "misc-frames-blacklist-placeholder": "Селекторы CSS, разделенные пробелом, запятой и пробелом.",

                "regextester-headline": "Проверьте свои регулярные выражения",
                "regextester-regex": "RegEx",
                "regextester-flag-i": "Без учета регистра (i)",
                "regextester-flag-g": "Глобальный (g)",
                "regextester-sample": "Проверить пример",
                "regextester-matches": "Совпадает?",
                "regextester-copylabel": "(готово для копирования&вставки в конфигурацию)",
                "regextester-btn-test": "Тестирование",

                "unsupported-header": "К сожалению, ваш браузер либо слишком старый, либо не поддерживается.",
                "unsupported-sudHeader": "Используйте один из следующих браузеров:",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "(Версия 17.0 и новее)",
                "unsupported-safari-versioninfo": "(Версия 6.0 и новее)",

                "validation-timerinterval": "Недопустимый интервал таймера. Задайте число от 100 до 600000.",
                "validation-maxevents": "Недопустимый размер (максимальное число сообщений): Задайте число от 1 до 100.",
                "validation-renderTimeThreshold": "Недопустимый порог времени рендеринга, введите число.",
                "validation-maxSize": "Недопустимый размер (максимальная сериализованная длина) Задайте число от 4000 до 1000000.",

                "reload-page": "Чтобы изменения языка вступили в силу, перезагрузите страницу."
            }

,
            zh: // NLS_CHARSET=UTF-8
{
                "site-title": "UIC 配置向导",
                "page-headline": "UIC 配置向导",
				"uic-version": "UIC 版本",
                "advanced-options": "高级选项",
                "btn-prev": "上一页",
                "btn-next": "下一页",
                "btn-finish": "完成",
                "btn-reset": "重置为缺省值",
                "btn-regextester": "正则表达式测试程序",

                "library-type-prod-min": "生产构建（已削减）",
                "library-type-prod": "生产构建（未削减）",
                "library-type-dev": "开发构建（未削减）",

                "core-inactivityTimeout": "不活动超时（毫秒）",
                "core-inactivityTimeout-helptext": "在“不活动超时”指定的超时值期间，如果没有用户活动，UIC 将自行终止。" +
                                                   "如果未指定不活动超时值，那么将使用内置的 10 分钟超时值。" +
                                                   "<br /><em>注：</em>指定超时值为 0 会禁用此功能。这可能导致出现孤立的 UI 命中，因而不推荐使用。",

                "browserService-header": "浏览器服务配置",
                "browserService-subHeader": "选择 flavor：",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "仅当 Web 应用程序使用 jQuery 1.7 或更高版本时，才支持 jQuery flavor。",
                "browserService-jQuery-description": "UIC 库的 jQuery flavor 使用 jQuery API 进行跨浏览器的 DOM 访问。",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "针对任何其他人。",
                "browserService-w3c-description": "UIC 库的 W3C flavor 直接使用浏览器 DOM API。" +
                                                  "<br /><em>注：</em>W3C flavor 需要同时还包含第三方 Sizzle JS 库。请参阅高级选项中的 Sizzle URL 部分。",

                "browserService-useCapture": "使用捕获阶段进行事件侦听",
                "browserService-useCapture-helptext": "注册事件侦听器时，启用事件捕获阶段。如果禁用，将使用事件冒泡，这可能导致某些事件由于禁止冒泡而被遗漏。建议启用此设置。" +
                                                      "<br /><em>注：</em>Internet Explorer 较旧版本 (IE 8 及更低版本）不支持事件捕获阶段，并且将自动还原为使用事件冒泡。" +
                                                      "<br />有关此设置的其他详细信息，请参阅 W3C DOM 规范：http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture",
                "browserService-sizzleObject": "Sizzle 对象",
                "browserService-sizzleObject-helptext": "Sizzle 对象的路径。如果跳过，那么缺省情况下会使用 window.Sizzle。" +
                                                        "<br /><br /><em>注：</em>使用 W3C 服务时，Internet Explorer 较旧版本（IE 8 及更低版本）中对库执行正确操作需要 Sizzle。" +
                                                        " 如果应用程序使用任意版本的 jQuery，那么不需要单独包含 Sizzle，因为 jQuery 已包含 Sizzle。" +
                                                        " 可以从 http://sizzlejs.com/ 获取 Sizzle",
                "browserService-jQueryObject": "jQuery 对象",
                "browserService-jQueryObject-helptext": "jQuery 对象的路径。如果跳过，那么缺省情况下会使用 window.jQuery。",
                "browserService-blacklistedElements": "加入黑名单的元素",
                "browserService-blacklistedElements-placeholder": "使用空格逗号空格分隔的标识或正则表达式。",
                "browserService-blacklistedElements-helptext": "将不唯一且/或动态生成的任何元素标识加入黑名单。与任何加入黑名单的条目匹配的元素标识将替换为定制属性值或 XPATH。" +
                                                               "<br /><br />提示：使用正则表达式测试程序可验证用于配置黑名单的任何正则表达式。",
                "browserService-customID": "定制属性标识",
                "browserService-customID-placeholder": "属性名称。",
                "browserService-customID-helptext": "可用于在元素的 HTML 标识不可用或加入黑名单时对此元素进行唯一标识的一个或多个属性。",
				"browserService-ieExcludedLinks": "Internet Explorer 排除的链接",
				"browserService-ieExcludedLinks-placeholder": "使用逗号分隔的 CSS 选择器。",
				"browserService-ieExcludedLinks-helptext": "此配置指定为 CSS 选择器的数组。例如，配置将指定为：" +
															" a[href^='javascript:'] " +
															"，以忽略以下链接触发的 beforeunload：< a href='javascript:void(0);'>单击此处< /a>" +
															"<br/>注：如果指定了无效字符（例如，$），并且未正确使用 \\ 对其进行转义，那么 Chrome 和 Webkit 浏览器中将发生异常。",
                "queueService-header": "队列服务配置",
                "queueService-subHeader": "配置库的内部队列",
                "queueService-queueName": "名称",
                "queueService-queueName-helptext": "此发行版中仅支持一个队列。队列名称必须为“DEFAULT”。请勿更改此值。",
                "queueService-queueEndpoint": "端点（目标页面）",
                "queueService-queueEndpoint-helptext": "Web 服务器上将发布已捕获数据的目标页面 URL。此发行版中不支持跨域 URL。",
                "queueService-queueSize-events": "大小（最大消息数）",
                "queueService-queueSize-events-helptext": "达到之后将清空队列的阈值。建议的值为 1-50（针对测试）和 20-50（针对生产部署）。",
                "queueService-queueSize-serialized": "大小（最大序列化长度）",
                "queueService-queueSize-serialized-helptext": "序列化队列长度阈值，达到该阈值后将清空队列。建议的值为 8000-20000（针对生产部署）。" +
                                                    "<br/>注：如果使用 gzip 编码，那么应该增加值来反映预编码的大小限制。" +
                                                    "<br/>警告：启用此设置在某些情况下可能会影响性能，因为此设置依赖于序列化队列才能检查阈值。",
                "queueService-queueSize-serialized-label": " （值 0 表示禁用此设置）",
                "queueService-queueTimer": "计时器时间间隔（毫秒）",
                "queueService-queueTimer-label": " 毫秒（值 0 表示禁用计时器）。",
                "queueService-queueTimer-helptext": "为了实现影子浏览场景，您可以将计时器值设置为定期清空队列，不管有多少消息。在其他大部分情况下，最好保持此设置为禁用状态。",

                "queueService-crossDomainEnabled": "启用跨域 POST 消息。",
                "queueService-crossDomainFrameSelector": "跨域帧选择器",
                "queueService-crossDomainFrameSelector-helptext": "跨域帧选择器应该在页面上指定已配置为 POST 请求的 iframe 或 frame 元素。",

				"queueService-asyncReqOnUnload": "在卸载页面时启用异步 XHR。",
				"queueService-asyncReqOnUnload-helptext": "选中此选项以在卸载页面期间启用异步请求。<br />警告：在卸载页面时启用异步请求可能会导致数据不完整或丢失。",

                "queueService-checkEndpoint": "检查端点",
                "queueService-checkEndpoint-helptext": "发送异步请求，以检查 Discover 端点是否可用。",
                "queueService-endpointCheckTimeout": "检查端点超时",
                "queueService-endpointCheckTimeout-helptext": "异步请求检查 Discover 端点是否可用超时。",

                "queueService-queueSerializer": "序列化器",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "仅支持 JSON 序列化。",
                "queueService-addQueue": "添加其他队列",

                "messageService-header": "消息服务配置",
                "messageService-subHeader": "隐私遮盖配置",
                "messageService-targets": "目标",
                "messageService-id": "标识",
                "messageService-id-helptext": "应该遮盖的元素的 HTML 标识、XPath 或定制属性标识（“attrName=attrValue”）。",
                "messageService-idType": "标识类型",
                "messageService-idType--1": "HTML 标识",
                "messageService-idType--2": "xPath",
                "messageService-idType--3": "定制属性标识",
                "messageService-idType-helptext": "选择正确的标识类型。",
                "messageService-addTarget": "添加其他目标",
                "messageService-maskType": "掩码类型",
                "messageService-maskType-1": "空",
                "messageService-maskType-2": "基本",
                "messageService-maskType-3": "类型",
                "messageService-maskType-4": "定制",
                "messageService-maskType-helptext": "掩码类型定义了应如何变换值。" +
                                                    "<dl>" +
                                                        "<dt><b>空：</b></dt>" +
                                                        "<dd>值将设置为空字符串。</dd>" +
                                                        "<dt><b>基本：</b></dt>" +
                                                        "<dd>值将替换为固定字符串：“XXXXX”。</dd>" +
                                                        "<dt><b>类型：</b></dt>" +
                                                        "<dd>" +
                                                            "值将替换为掩码，其中：" +
                                                            "<ul>" +
                                                                "<li>每个小写字符将替换为“x”，</li>" +
                                                                "<li>每个大写字符将替换为“X”，</li>" +
                                                                "<li>每个数字将替换为“9”，</li>" +
                                                                "<li>每个符号将替换为“@”。</li>" +
                                                            "</ul>" +
                                                            "因此，字符串“HelloWorld123”将变为“XxxxxXxxxx999”" +
                                                        "</dd>" +
                                                        "<dt><b>定制：</b></dt>" +
                                                        "<dd>值将替换为需要写入 MaskFunction 文本框的定制函数的返回值。</dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "掩码函数",
                "messageService-maskFunction-helptext": "接受未遮盖的字符串并返回已遮盖的值的 JavaScript 函数。",
                "messageService-addConfiguration": "添加隐私配置",
				"messageService-cssSelector": "CSS 选择器",
				"messageService-cssSelector-helptext": "添加单个 CSS 选择器字符串",
				"services-message-privacy-cssSelector-placeholder": "在此处添加 CSS 选择器字符串",
				"messageService-removePrivacyConfigurationTarget": "除去目标",
				"messageService-removePrivacyConfiguration": "除去隐私配置",

                "serializer-header": "序列化器服务配置",
                "serializer-defaultToBuiltin": "使用内置解析器/序列化器（如果都不可用）",
                "serializer-defaultToBuiltin-helptext": "UIC 随附了自己对 JSON 解析器/序列化器的基本实现。按如下所示来选择 JSON 解析器/序列化器：<br />" +
                                                        "<ol>" +
                                                          "<li>如果在以下配置中显式指定了 JSON 解析器/序列化器，那么 UIC 将使用指定项。" +
                                                          "<li>如果在以下配置中未显式指定 JSON 解析器/序列化器，那么 UIC 将检查浏览器是否具有 JSON 的本机支持。" +
                                                          "<li>如果浏览器未提供对 JSON 的本机支持，并且选中了此复选框，那么 UIC 将使用其 JSON 的基本实现。" +
                                                          "<li>如果以上任一项均不适用，那么 UIC 将静默失败。" +
                                                        "</ol>",
                "serializer-parsers": "解析器",
                "serializer-parsers-helptext": "列表包含 UIC 应使用的解析器函数（例如，JSON.parse）。第一个函数最重要。如果 UIC 找不到此函数，那么会尝试下一个函数（如果已指定），以此类推。",
                "serializer-parser": "解析器",
                "serializer-addParser": "添加其他解析器",
                "serializer-stringifiers": "序列化器",
                "serializer-stringifiers-helptext": "列表包含 UIC 应使用的序列化器函数（例如，JSON.stringify）。第一个函数最重要。如果 UIC 找不到此函数，那么会尝试下一个函数（如果已指定），以此类推。",
                "serializer-stringifier": "序列化器",
                "serializer-addStringifier": "添加其他序列化器",

				"encoder-header": "编码器服务配置",
				"encoder": "编码器",
				"encoder-enable": "启用",
                "encoder-enable-helptext": "启用此服务以允许 UIC 将 gzip 压缩应用到请求数据。请注意，UIC 初始化之前，编码器服务依赖要在页面上包含并初始化的“pako”开放式源代码库。有关包含下载的“pako”的更多信息，请参阅 https://github.com/nodeca/pako",
				"encoder-encode": "编码",
				"encoder-defaultEncoding": "缺省编码",
				"encoder-helptext": "配置压缩编码器服务。缺省情况下，配置了 gzip。",
				"encoder-defaultEncoding-helptext": "UIC 将在 HTTP 请求头中指定的编码类型。缺省情况下，为“Content-encoding: gzip”。",
				"encoder-encode-helptext": "编码器的路径。缺省情况下，为“window.pako.gzip”。",

                "modules-header": "模块",
                "modules-subHeader": "选择启用的模块",
                "modules-performance": "性能",
                "modules-performance-helptext": "W3C 导航计时属性",
                "modules-PerformanceSettings": "性能设置",
                "modules-replay": "重放",
                "modules-replay-helptext": "进行用户交互监视，以启用重放、易用性和基于步骤的事件触发。",
				"modules-usability": "Usability",
				"modules-usability-helptext": "向配置添加 mouseout、mousemove 和 click usability 事件。",
                "modules-moduleBaseURL": "moduleBase URL：",
                "modules-moduleBaseURL-helptext": "服务器上可从其动态装入模块的位置。当前发行版中未使用此选项。",
                "modules-replay-events": "重放事件",
                "modules-hover-tracking": "启用悬浮跟踪",
                "modules-mobile-events": "启用移动事件",
                "modules-hashchange": "从 hashchange 启用 screenview",
                "modules-scroll-winsize": "启用滚动和窗口大小跟踪",
				"modules-navigationStart-helptext": "此属性必须返回用户代理程序完成提示卸载先前文档后的紧邻时间。如果没有先前文档，那么此属性必须返回与 fetchStart 相同的值。",
				"modules-unloadEventStart-helptext": "如果先前文档和当前文档具有相同 origin [IETF RFC 6454]，那么此属性必须返回用户代理程序开始先前文档的卸载事件前的紧邻时间。如果没有先前文档或先前文档具有的 origin 与当前文档不同，那么此属性必须返回 0。",
				"modules-unloadEventEnd-helptext": "如果先前文档和当前文档具有相同 origin，那么此属性必须返回用户代理程序完成先前文档的卸载事件后的紧邻时间。如果没有先前文档，或先前文档具有的 origin 与当前文档不同，或尚未完成卸载，那么此属性必须返回 0。如果导航时发生 HTTP 重定向或等效项，并且不是所有的重定向或等效项都来自相同 origin，那么 unloadEventStart 和 unloadEventEnd 都必须返回 0。",
				"modules-redirectStart-helptext": "如果导航时发生 HTTP 重定向或等效项，并且所有重定向或等效项都来自相同 origin，那么此属性必须返回启动重定向的访存的起始时间。否则，此属性必须返回 0。",
				"modules-redirectEnd-helptext": "如果导航时发生 HTTP 重定向或等效项，并且所有重定向和等效项都来自相同 origin，那么此属性必须返回接收上次重定向的响应中最后一个字节后的紧邻时间。否则，此属性必须返回 0。",
				"modules-fetchStart-helptext": "如果要使用 HTTP GET 或等效项访存新资源，那么 fetchStart 必须返回用户代理程序开始检查任何相关应用程序高速缓存之前的紧邻时间。否则，它必须返回用户代理程序开始访存资源的时间。",
				"modules-domainLookupStart-helptext": "此属性必须返回用户代理程序开始当前文档的域名查找前的紧邻时间。如果使用了持久连接 [RFC 2616]，或者当前文档是从相关应用程序高速缓存或本地资源检索的，那么此属性必须返回与 fetchStart 相同的值。",
				"modules-domainLookupEnd-helptext": "此属性必须返回用户代理程序完成当前文档的域名查找后的紧邻时间。如果使用了持久连接 [RFC 2616]，或者当前文档是从相关应用程序高速缓存或本地资源检索的，那么此属性必须返回与 fetchStart 相同的值。",
				"modules-connectStart-helptext": "此属性必须返回用户代理程序开始建立与服务器的连接以检索文档前的紧邻时间。如果使用了持久连接 [RFC 2616]，或者当前文档是从相关应用程序高速缓存或本地资源检索的，那么此属性必须返回 domainLookupEnd 值。",
				"modules-connectEnd-helptext": "此属性必须返回用户代理程序完成建立与服务器的连接以检索当前文档后的紧邻时间。如果使用了持久连接 [RFC 2616]，或者当前文档是从相关应用程序高速缓存或本地资源检索的，那么此属性必须返回 domainLookupEnd 值。如果传输连接失败，并且用户代理程序重新打开了一个连接，那么 connectStart 和 connectEnd 应返回新连接的相应值。connectEnd 必须包含建立传输连接的时间间隔以及其他时间间隔，例如，SSL 握手和 SOCKS 认证。",
				"modules-secureConnectionStart-helptext": "此属性是可选的。未提供此属性的用户代理程序必须将其设置为未定义。此属性可用时，如果当前页面的方案为 HTTPS，那么此属性必须返回用户代理程序开始握手过程以保护当前连接之前的紧邻时间。如果此属性可用，但未使用 HTTPS，那么此属性必须返回 0。",
				"modules-requestStart-helptext": "此属性必须返回用户代理程序开始从服务器、从相关应用程序高速缓存或从本地资源请求当前文档前的紧邻时间。如果在发送请求后传输连接失败，并且用户代理程序重新打开了一个连接并重新发送该请求，那么 requestStart 应返回新请求的相应值。",
				"modules-responseStart-helptext": "此属性必须返回用户代理程序从服务器、从相关应用程序高速缓存或从本地资源收到响应的第一个字节后的紧邻时间。",
				"modules-responseEnd-helptext": "此属性必须返回用户代理程序收到当前文档的最后一个字节后的紧邻时间或者关闭传输连接前的紧邻时间（两者取较早的时间）。可以从服务器、相关应用程序高速缓存或本地资源接收此处的文档。",
				"modules-domLoading-helptext": "此属性必须返回用户代理程序将当前文档准备状态设置为“正在装入”前的紧邻时间。",
				"modules-domInteractive-helptext": "此属性必须返回用户代理程序将当前文档准备状态设置为“交互”前的紧邻时间。",
				"modules-domContentLoadedEventStart-helptext": "此属性必须返回用户代理程序在文档处触发 DOMContentLoaded 事件前的紧邻时间。",
				"modules-domContentLoadedEventEnd-helptext": "此属性必须返回文档的 DOMContentLoaded 事件完成后的紧邻时间。",
				"modules-domComplete-helptext": "此属性必须返回用户代理程序将当前文档准备状态设置为“完成”前的紧邻时间。如果当前文档准备状态多次更改为相同状态，那么 domLoading、domInteractive、domContentLoadedEventStart、domContentLoadedEventEnd 和 domComplete 必须返回第一次出现相应文档准备状态更改的时间。",
				"modules-loadEventStart-helptext": "此属性必须返回触发当前文档的装入事件前的紧邻时间。尚未触发装入事件时，它必须返回 0。",
				"modules-loadEventEnd-helptext": "此属性必须返回完成当前文档的装入事件的时间。未触发或未完成装入事件时，它必须返回 0。",
				"modules-mobile-events-helptext": "从移动会话启用事件的重放。",
				"modules-hashchange-helptext": "启用此选项时，会在页面的 URL 中识别到 hashchange 时生成 screenview 事件。将在会话数据中插入 screenview 事件，UI Capture 所捕获到的 UI 事件可在发生这些事件的 screenview 下进行组织。",
				"modules-scroll-winsize-helptext": "注：根据您的应用程序，跟踪窗口滚动可能会生成大量事件。仅针对 BBR 中的移动会话，支持重放从客户机捕获的滚动事件。",

                "performance-calculateRenderTime": "计算不支持 W3C 导航计时的浏览器的呈现时间",
                "performance-calculateRenderTime-helptext": "通过度量页面装入和库装入之间的时间差来计算<br>呈现时间。",
                "performance-calculateRenderTime-description": "启用此设置时，库会将呈现时间计算为其装入时间与页面装入时间之差。为更准确地进行度量，确保尽早在页面装入周期中装入库。",
				"performance-renderTimeThreshold": "renderTimeThreshold：",
				"performance-renderTimeThreshold-helptext": "最长呈现时间（毫秒）。缺省值为 10 分钟<br>（600000 毫秒）。任何超出此阈值的度量呈现时间<br>将报告为“invalidRenderTime”，并且不会包含在<br>呈现时间性能报告中。",

				"replay-customEventName-placeholder": "输入单个事件名称。例如，mousedown",
				"replay-customEventTarget-placeholder": "输入目标元素的 CSS 选择器。",
				"replay-customEvent": "定制重放事件",
				"replay-customEvent-helptext": "输入代理目标元素或文档或窗口的 CSS 选择器",
				"replay-addCustomDelegate": "添加定制重放事件",
				"replay-customEvent-name": "事件名称",
				"replay-customEvent-target": "事件目标",
				"replay-customEvent-name-helptext": "在此处输入事件名称。例如，mousedown",
				"replay-customEvent-target-helptext": "输入目标元素或文档或窗口的 CSS 选择器",
				"replay-customEvent-delegateTarget": "事件代理目标（可选）",
				"replay-customEvent-delegateTarget-helptext": "输入代理目标元素或文档或窗口的 CSS 选择器。此设置为可选设置。",
				"replay-customEvent-recurseFrames": "递归帧（可选）",
				"replay-customEvent-recurseFrames-helptext": "如果选中此项，那么会将事件的侦听器应用到文档的子帧/iframe。此设置为可选设置。",
                "replay-customEvent-state": "状态",
                "replay-customEventState-placeholder": "输入要用作定制事件的状态的属性",
                "replay-customEvent-state-helptext": "指定如何仅针对定制重放事件在 JSON 中设置 target.currState 值。",
				"replay-removeCustomEvent": "除去定制重放",

				"domCapture-header": "DOM 捕获",
				"domCapture-enabled": "启用 DOM 捕获",
				"domCapture-enabled-helptext": "警告：启用 DOM 捕获对数据数据传输和基础结构有重大的影响。因此应合理启用此功能。如果启用，需要进一步配置，以仅执行基于特定事件和元素的 DOM 捕获。请参阅文档以获取更多详细信息。",
				"domCapture-captureFrames": "捕获帧",
				"domCapture-captureFrames-helptext": "如果选中此项，那么将捕获子帧和 iframe。注：仅可以捕获与父页面本身源自相同域的内容。",
				"domCapture-removeScripts": "除去脚本",
				"domCapture-removeScripts-helptext": "如果选中此项，那么将从捕获的快照除去所有脚本标记。",
                "domCapture-diffEnabled": "启用 DOM 差集",
                "domCapture-diffEnabled-helptext": "如果选中此项，那么将在初始完整 DOM 快照后发送 DOM 差集。建议启用此设置。",
                "domCapture-maxLength": "最大长度",
                "domCapture-maxLength-helptext": "如果超出此阈值，那么不会发送快照。",
                "domCapture-maxMutations": "最大突变数",
                "domCapture-maxMutations-helptext": "如果达到或超过此阈值，那么将拍摄完整 DOM 快照，而非差异快照。使用此设置可微调“DOM 捕获”配置，并设置安全限制来防止由于处理过多 DOM 突变而产生性能瓶颈。",
				"domCapture-subHeader": "添加 DOM 捕获触发器",
				"domCapture-trigger": "触发器",
				"domCapture-addTrigger": "添加触发器",
				"domCapture-event": "事件",
				"domCapture-event-helptext": "可用事件为装入、卸载、单击或更改。",
				"domCapture-screenview": "Screenview",
				"domCapture-addScreenview": "添加 Screenview",
				"domCapture-removeScreenview": "除去 Screenview",
				"domCapture-delay": "重放",
				"domCapture-delay-helptext": "可选延迟（毫秒），在此延迟之后应拍摄 DOM 快照。",
				"domCapture-delay-placeholder": "输入数字",
                "domCapture-fullDOMCapture": "完整 DOM 捕获",
                "domCapture-fullDOMCapture-helptext": "如果勾选，将对此触发器拍摄完整 DOM 快照。",
				"domCapture-removeTrigger": "除去触发器",
				"domCapture-addTarget": "添加目标",
				"domCapture-removeTarget": "除去目标",
				"domCapture-target": "目标",
				"domCapture-target-id": "标识",
				"domCapture-target-id-helptext": "三种标识类型中指定的类型的目标标识。",
				"domCapture-target-idType": "标识类型",
				"domCapture-target-idType-helptext": "元素的 HTML 标识、XPath 或定制标识。",
				"domCapture-target-cssSelector": "CSS 选择器",
				"domCapture-target-cssSelector-helptext": "添加单个 CSS 选择器字符串。",
                "domCapture-load": "装入",
                "domCapture-unload": "卸载",
                "domCapture-click": "单击",
                "domCapture-change": "更改",
                "domCapture-custom": "定制",
                "domCapture-custom-eventName": "定制事件名称：",

                "DCCookie-header": "Cookie 和会话管理",
                "DCCookie-enabled": "启用 DCCookie 模块",
                "DCCookie-enabled-helptext": "DCCookie 模块允许配置应用程序密钥和会话形成 cookie。使用 Discover SaaS 服务时需要这些配置。有关其他信息，请参阅 Discover SaaS 文档。",
                "DCCookie-dcAppKey": "应用程序密钥",
                "DCCookie-dcAppKey-helptext": "在此字段中输入 Discover SaaS 应用程序密钥。",
                "DCCookie-sessionCookie": "会话形成 Cookie 名称",
                "DCCookie-sessionCookie-helptext": "指定用于会话形成的 cookie。将 <strong>DCXSID</strong> 指定为会话形成 cookie 将会使 UIC 创建 cookie（如果其尚未存在的话）。",
                
                "geolocation-header": "地理位置",
                "geolocation-enable": "启用地理位置日志记录",
                "geolocation-load": "装入事件期间的地理位置",
                "geolocation-load-helptext": "将在装入事件期间启用地理位置日志记录",
                "geolocation-helptext": "地理位置日志记录会报告度量的纬度、经度和准确性（如果可用）。",

                "misc-header": "其他设置",
                "sessionData-options": "会话数据共享选项",
                "sessionData-Enable": "共享会话数据",
                "sessionData-Enable-description": "选择此选项将实现会话数据与页面上其他脚本的共享。请参阅文档以获取详细信息。",
                "sessionData-Enable-helptext": "选择此选项将实现会话数据与页面上其他脚本的共享。请参阅文档以获取详细信息。",
                "sessionId-Cookie": "cookie",
                "sessionId-Cookie-description": "如果使用 cookie 进行会话形成，请选择此选项。",
                "sessionId-Cookie-helptext": "如果使用 cookie 进行会话形成，请选择此选项。",
                "sessionId-Query": "查询参数",
                "sessionId-Query-description": "如果使用查询参数进行会话形成，请选择此选项。",
                "sessionId-Query-helptext": "如果使用查询参数进行会话形成，请选择此选项。",
                "sessionId-Cookie-Name": "cookie 名称",
                "sessionId-Cookie-Name-helptext": "将用于会话形成的 cookie 的名称。例如，DCXSID 和 jsessionid 等。",
                "sessionId-Query-Name": "查询参数名称",
                "sessionId-Query-Name-helptext": "将用于会话形成的查询参数的名称（即 LHS）。",
                "sessionId-Query-Delimiter": "查询字符串定界符",
                "sessionId-Query-Delimiter-helptext": "指定由应用程序使用的查询字符串定界符。缺省值为 &",
                "sessionId-ValueNeedsHashing": "值需要进行散列化",
                "sessionId-ValueNeedsHashingDescription": "如果需要对值进行散列化以派生会话标识，请选择此选项。",
                "misc-frames-blacklist-label": "加入黑名单的帧",
                "misc-frames-blacklist-helptext": "从数据收集中排除的帧的 CSS 选择器。",
                "misc-frames-blacklist-placeholder": "使用空格逗号空格分隔的 CSS 选择器。",

                "regextester-headline": "测试您的正则表达式",
                "regextester-regex": "正则表达式",
                "regextester-flag-i": "不区分大小写 (i)",
                "regextester-flag-g": "全局 (g)",
                "regextester-sample": "测试样本",
                "regextester-matches": "是否匹配？",
                "regextester-copylabel": "（准备好复制并粘贴到配置中）",
                "regextester-btn-test": "测试",

                "unsupported-header": "很遗憾，您的浏览器太旧或不受支持。",
                "unsupported-sudHeader": "请使用以下某个浏览器：",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "（V17.0 及更高版本）",
                "unsupported-safari-versioninfo": "（V6.0 及更高版本）",

                "validation-timerinterval": "计时器时间间隔无效。请输入 1000 到 600000 之间的数字。",
                "validation-maxevents": "大小（最大消息数）无效。请输入 1 到 100 之间的数字。",
                "validation-renderTimeThreshold": "呈现时间阈值无效，请输入数字。",
                "validation-maxSize": "大小（最大序列化长度）无效。请输入 4000 到 1000000 之间的数字。",

                "reload-page": "请重新装入页面，以使语言更改生效。"
            }

,
            zhHant: // NLS_CHARSET=UTF-8
{
                "site-title": "UIC 配置精靈",
                "page-headline": "UIC 配置精靈",
				"uic-version": "UIC 版本 ",
                "advanced-options": "進階選項",
                "btn-prev": "上一頁",
                "btn-next": "下一頁",
                "btn-finish": "完成",
                "btn-reset": "重設為預設值",
                "btn-regextester": "RegEx 測試器",

                "library-type-prod-min": "正式作業建置（已縮製）",
                "library-type-prod": "正式作業建置（非縮製）",
                "library-type-dev": "開發建置（非縮製）",

                "core-inactivityTimeout": "閒置逾時（毫秒）",
                "core-inactivityTimeout-helptext": "「閒置逾時」指定逾時值，在此期間若無使用者活動，UIC 將自行終止。" +
                                                   "如果未指定閒置逾時值，則會使用內建逾時值 10 分鐘。" +
                                                   "<br /><em>附註：</em>指定逾時值 0，會停用此功能。這可能導致發生孤立的使用者介面點閱，因此不建議您這麼做。",

                "browserService-header": "瀏覽器服務配置",
                "browserService-subHeader": "選取特性：",
                "browserService-jQuery": "jQuery",
                "browserService-jQuery-helptext": "只有在 Web 應用程式使用 jQuery 1.7 或以上版本時，才支援 jQuery 特性。",
                "browserService-jQuery-description": "UIC 程式庫的 jQuery 特性使用 jQuery API 進行跨瀏覽器 DOM 存取。",
                "browserService-w3c": "W3C",
                "browserService-w3c-helptext": "適用於其他所有人。",
                "browserService-w3c-description": "UIC 程式庫的 W3C 特性直接使用瀏覽器 DOM API。" +
                                                  "<br /><em>附註：</em>W3C 特性也需要包括協力廠商 Sizzle JS 程式庫。請參閱進階選項中的 Sizzle URL 區段。",

                "browserService-useCapture": "使用擷取階段進行事件接聽",
                "browserService-useCapture-helptext": "登錄事件接聽器時，啟用事件擷取階段。如果停用，則會使用事件反昇，而導致遺失某些事件（如果防止它們進行事件反昇的話）。建議啟用此設定。" +
                                                      "<br /><em>附註：</em>較舊版的 Internet Explorer（IE 8 及更舊版本）不支援事件擷取階段，將自動回復成使用事件反昇。" +
                                                      "<br />如需有關此設定的其他詳細資料，請參閱 W3C DOM 規格：http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture",
                "browserService-sizzleObject": "Sizzle 物件",
                "browserService-sizzleObject-helptext": "Sizzle 物件的路徑。跳過時，預設會使用 window.Sizzle。" +
                                                        "<br /><br /><em>附註：</em>使用 W3C 服務時，您需要有 Sizzle 才能在較舊版本的 Internet Explorer（IE 8 及更舊版本）中正確操作程式庫。" +
                                                        " 如果應用程式使用任何版本的 jQuery，因為 jQuery 已包括 Sizzle，所以不需要包括不同的 Sizzle。" +
                                                        " Sizzle 可從 http://sizzlejs.com/ 取得",
                "browserService-jQueryObject": "jQuery 物件",
                "browserService-jQueryObject-helptext": "jQuery 物件的路徑。跳過時，預設會使用 window.jQuery。",
                "browserService-blacklistedElements": "黑名單的元素",
                "browserService-blacklistedElements-placeholder": "以「空格逗點空格」形式區隔的 ID 或正規表示式。",
                "browserService-blacklistedElements-helptext": "將不是唯一及（或）動態產生的任何元素 ID 設為黑名單。與任何黑名單項目相符的元素 ID 將會取代為自訂屬性值或 XPATH。" +
                                                               "<br /><br />提示：使用 RegEx 測試器，以驗證用來配置黑名單的任何正規表示式。",
                "browserService-customID": "自訂屬性 ID：",
                "browserService-customID-placeholder": "屬性名稱。",
                "browserService-customID-helptext": "可在元素的 HTML ID 無法使用或為黑名單時用來唯一識別元素的一個以上屬性。",
				"browserService-ieExcludedLinks": "Internet Explorer 已排除鏈結",
				"browserService-ieExcludedLinks-placeholder": "以逗點區隔的 CSS 選取器。",
				"browserService-ieExcludedLinks-helptext": "此配置指定為 CSS 選取器陣列。例如，配置將指定為：" +
															" a[href^='javascript:'] " +
															"以忽略透過下列鏈結所觸發的 beforeunload：< a href='javascript:void(0);'>Click here< /a>" +
															"<br/>附註：如果指定無效字元（例如 $）但未適當地使用 \\ 跳出它，將會造成 Chrome 及 Webkit 瀏覽器中的異常狀況。",
                "queueService-header": "佇列服務配置",
                "queueService-subHeader": "配置程式庫的內部佇列",
                "queueService-queueName": "名稱",
                "queueService-queueName-helptext": "這個版本只支援一個佇列。佇列名稱「必須」是 'DEFAULT'。請不要變更此值。",
                "queueService-queueEndpoint": "端點（目標頁面）",
                "queueService-queueEndpoint-helptext": "Web 伺服器上將會張貼所擷取資料的目標頁面 URL。這個版本不支援跨網域 URL。",
                "queueService-queueSize-events": "大小（訊息數上限）",
                "queueService-queueSize-events-helptext": "臨界值，在此值之後將會清除佇列。建議值介於 1-50 之間以進行測試，而建議值介於 20-50 之間以進行正式作業部署。",
                "queueService-queueSize-serialized": "大小（序列化長度上限）",
                "queueService-queueSize-serialized-helptext": "序列化佇列長度臨界值，在此值之後將會清除佇列。建議值介於 8000-20000 之間以進行正式作業部署。" +
                                                    "<br/>附註：如果正在使用 gzip 編碼，則應增加此值以反映預先編碼的大小限制。" +
                                                    "<br/>警告：啟用此設定在某些情況下可能會有效能上的影響，因為它是根據佇列的序列化才能檢查臨界值。",
                "queueService-queueSize-serialized-label": " （值為 0 時會停用此設定）",
                "queueService-queueTimer": "計時器間隔（毫秒）",
                "queueService-queueTimer-label": " 毫秒（值為 0 時會停用計時器）。",
                "queueService-queueTimer-helptext": "若要啟用陰影瀏覽實務範例，不管訊息數目為何，您都可以設定計時器值以定期清除佇列。在大部分其他案例中，最好保持此設定的已停用狀態。",

                "queueService-crossDomainEnabled": "啟用跨網域 POST 訊息。",
                "queueService-crossDomainFrameSelector": "跨網域頁框選取器",
                "queueService-crossDomainFrameSelector-helptext": "跨網域頁框選取器應該指定頁面上已配置為 POST 要求的 iframe 或頁框元素。",

				"queueService-asyncReqOnUnload": "在卸載頁面時啟用非同步 XHR。",
				"queueService-asyncReqOnUnload-helptext": "勾選此選項，以在卸載頁面期間啟用非同步要求。<br />警告：在卸載頁面時啟用非同步要求可能會導致資料不完整或遺漏。",

                "queueService-checkEndpoint": "檢查端點",
                "queueService-checkEndpoint-helptext": "傳送非同步要求來檢查是否有 Discover 端點。",
                "queueService-endpointCheckTimeout": "檢查端點逾時",
                "queueService-endpointCheckTimeout-helptext": "檢查是否有 Discover 端點的非同步要求逾時。",

                "queueService-queueSerializer": "序列化程式",
                "queueService-queueSerializer-JSON": "JSON",
                "queueService-queueSerializer-XML": "XML",
                "queueService-queueSerializer-helptext": "只支援 JSON 序列化。",
                "queueService-addQueue": "新增另一個佇列",

                "messageService-header": "訊息服務配置",
                "messageService-subHeader": "保密遮罩配置",
                "messageService-targets": "目標",
                "messageService-id": "ID",
                "messageService-id-helptext": "應該遮罩之元素的 HTML ID、XPath 或自訂屬性 ID ('attrName=attrValue')。",
                "messageService-idType": "ID 類型",
                "messageService-idType--1": "HTML ID",
                "messageService-idType--2": "xPath",
                "messageService-idType--3": "自訂屬性 ID",
                "messageService-idType-helptext": "選取正確 ID 類型。",
                "messageService-addTarget": "新增另一個目標",
                "messageService-maskType": "遮罩類型",
                "messageService-maskType-1": "空的",
                "messageService-maskType-2": "基本",
                "messageService-maskType-3": "類型",
                "messageService-maskType-4": "自訂",
                "messageService-maskType-helptext": "「遮罩類型」定義應該如何轉換值。" +
                                                    "<dl>" +
                                                        "<dt><b>空的：</b></dt>" +
                                                        "<dd>值會設為空字串。</dd>" +
                                                        "<dt><b>基本：</b></dt>" +
                                                        "<dd>值會取代為固定字串：\"XXXXX\"。</dd>" +
                                                        "<dt><b>類型：</b></dt>" +
                                                        "<dd>" +
                                                            "值會取代為遮罩，其中每一個：" +
                                                            "<ul>" +
                                                                "<li>小寫字元會取代為：\"x\"、</li>" +
                                                                "<li>大寫字元會取代為：\"X\"、</li>" +
                                                                "<li>數字字元會取代為：\"9\"、</li>" +
                                                                "<li>符號會取代為：\"@\"。</li>" +
                                                            "</ul>" +
                                                            "因此，字串：\"HelloWorld123\" 會變成：\"XxxxxXxxxx999\"" +
                                                        "</dd>" +
                                                        "<dt><b>自訂：</b></dt>" +
                                                        "<dd>值會取代為需要在 MaskFunction 文字框中寫入的自訂函數的回覆值。</dd>" +
                                                    "</dl>",
                "messageService-maskFunction": "遮罩函數",
                "messageService-maskFunction-helptext": "接受未遮罩字串並傳回遮罩值的 JavaScript 函數。",
                "messageService-addConfiguration": "新增保密配置",
				"messageService-cssSelector": "CSS 選取器",
				"messageService-cssSelector-helptext": "新增單一 CSS 選取器字串",
				"services-message-privacy-cssSelector-placeholder": "在這裡新增 CSS 選取器字串",
				"messageService-removePrivacyConfigurationTarget": "移除目標",
				"messageService-removePrivacyConfiguration": "移除保密配置",

                "serializer-header": "序列化程式服務配置",
                "serializer-defaultToBuiltin": "使用內建剖析器/序列化程式（如果尚未使用）",
                "serializer-defaultToBuiltin-helptext": "UIC 隨附 JSON 剖析器/序列化程式的專屬基本實作。進行的 JSON 剖析器/序列化程式的選項如下：<br />" +
                                                        "<ol>" +
                                                          "<li>如果在下面的配置中明確地指定 JSON 剖析器/序列化程式，則 UIC 會使用它。" +
                                                          "<li>如果在下面的配置中未明確地指定 JSON 剖析器/序列化程式，則 UIC 會確認瀏覽器是否具有 JSON 的原生支援。" +
                                                          "<li>如果瀏覽器原本不支援 JSON 並選取此勾選框，則 UIC 會使用 JSON 的基本實作。" +
                                                          "<li>如果以上皆非，則 UIC 會無聲自動地失敗。" +
                                                        "</ol>",
                "serializer-parsers": "剖析器",
                "serializer-parsers-helptext": "此清單包含 UIC 應該使用的剖析器函數（例如，JSON.parse）。第一個最重要。如果 UIC 找不到它，則會嘗試下一個（如果已指定），以此類推。",
                "serializer-parser": "剖析器",
                "serializer-addParser": "新增另一個剖析器",
                "serializer-stringifiers": "序列化程式",
                "serializer-stringifiers-helptext": "此清單包含 UIC 應該使用的序列化程式函數（例如，JSON.stringify）。第一個最重要。如果 UIC 找不到它，則會嘗試下一個（如果已指定），以此類推。",
                "serializer-stringifier": "序列化程式",
                "serializer-addStringifier": "新增另一個序列化程式",

				"encoder-header": "編碼器服務配置",
				"encoder": "編碼器",
				"encoder-enable": "啟用",
                "encoder-enable-helptext": "啟用此服務以容許 UIC 將 gzip 壓縮套用到要求資料。請注意，在起始設定 UIC 之前，「編碼器」服務會依賴頁面上要包括及起始設定的 'pako' 開放程式碼程式庫。如需 'pako'（包括下載項目）的相關資訊，請參閱：https://github.com/nodeca/pako",
				"encoder-encode": "編碼",
				"encoder-defaultEncoding": "預設編碼",
				"encoder-helptext": "配置壓縮編碼器服務。預設會配置 gzip。",
				"encoder-defaultEncoding-helptext": "UIC 將在 HTTP 要求標頭中指定的編碼類型。預設為 'Content-encoding: gzip'。",
				"encoder-encode-helptext": "編碼器的路徑。預設為 'window.pako.gzip'。",

                "modules-header": "模組",
                "modules-subHeader": "選取已啟用的模組",
                "modules-performance": "效能",
                "modules-performance-helptext": "W3C 導覽計時內容",
                "modules-PerformanceSettings": "效能設定",
                "modules-replay": "重播",
                "modules-replay-helptext": "使用者互動監視以啟用重播、可用性及步驟型事件。",
				"modules-usability": "Usability",
				"modules-usability-helptext": "將 mouseout、mousemove 及 click usability 事件新增至配置。",
                "modules-moduleBaseURL": "moduleBase URL：",
                "modules-moduleBaseURL-helptext": "伺服器上可從中動態載入模組的位置。現行版本未使用此選項。",
                "modules-replay-events": "重播事件",
                "modules-hover-tracking": "啟用滑鼠橫越追蹤",
                "modules-mobile-events": "啟用行動式事件",
                "modules-hashchange": "從 hashchange 啟用螢幕視圖",
                "modules-scroll-winsize": "啟用捲動及視窗大小追蹤",
				"modules-navigationStart-helptext": "此屬性必須傳回使用者代理程式完成提示卸載前一個文件之後的立即時間。如果沒有前一個文件，此屬性必須傳回與 fetchStart 相同的值。",
				"modules-unloadEventStart-helptext": "如果前一個文件與現行文件具有相同的原始 [IETF RFC 6454]，則此屬性必須傳回使用者代理程式啟動前一個文件的卸載事件之前的立即時間。如果沒有前一個文件，或前一個文件與現行文件的原始不同，則此屬性必須傳回零。",
				"modules-unloadEventEnd-helptext": "如果前一個文件與現行文件具有相同的原始，則此屬性必須傳回使用者代理程式完成前一個文件的卸載事件之後的立即時間。如果沒有前一個文件、前一個文件與現行文件的原始不同，或卸載尚未完成，則此屬性必須傳回零。如果導覽時有 HTTP 重新導向或對等項目，而且並非所有重新導向或對等項目都來自相同的原始，則 unloadEventStart 及 unloadEventEnd 都必須傳回零。",
				"modules-redirectStart-helptext": "如果導覽時有 HTTP 重新導向或對等項目，而且所有重新導向或對等項目都來自相同的原始，則此屬性必須傳回起始重新導向的提取開始時間。否則，此屬性必須傳回零。",
				"modules-redirectEnd-helptext": "如果導覽時有 HTTP 重新導向或對等項目，而且所有重新導向及對等項目都來自相同的原始，則此屬性必須傳回收到最後一個重新導向的最後一個回應位元組之後的立即時間。否則，此屬性必須傳回零。",
				"modules-fetchStart-helptext": "如果使用 HTTP GET 或對等項目提取新的資源，則 fetchStart 必須傳回使用者代理程式開始檢查任何相關應用程式快取之前的立即時間。否則，它必須傳回使用者代理程式開始提取資源的時間。",
				"modules-domainLookupStart-helptext": "此屬性必須傳回使用者代理程式啟動現行文件的網域名稱查閱之前的立即時間。如果使用持續性連線 [RFC 2616]，或從相關的應用程式快取或本端資源中擷取現行文件，則此屬性必須傳回與 fetchStart 相同的值。",
				"modules-domainLookupEnd-helptext": "此屬性必須傳回使用者代理程式完成現行文件的網域名稱查閱之後的立即時間。如果使用持續性連線 [RFC 2616]，或從相關的應用程式快取或本端資源中擷取現行文件，則此屬性必須傳回與 fetchStart 相同的值。",
				"modules-connectStart-helptext": "此屬性必須傳回使用者代理程式開始建立伺服器連線以擷取文件之前的立即時間。如果使用持續性連線 [RFC 2616]，或從相關的應用程式快取或本端資源中擷取現行文件，則此屬性必須傳回 domainLookupEnd 的值。",
				"modules-connectEnd-helptext": "此屬性必須傳回使用者代理程式完成建立伺服器連線以擷取現行文件之後的立即時間。如果使用持續性連線 [RFC 2616]，或從相關的應用程式快取或本端資源中擷取現行文件，則此屬性必須傳回 domainLookupEnd 的值。如果傳輸連線失敗，而且使用者代理程式重新開啟連線，則 connectStart 及 connectEnd 應該傳回新連線的對應值。connectEnd 必須包括建立傳輸連線的時間間隔，以及其他時間間隔（例如 SSL 信號交換及 SOCKS 鑑別）。",
				"modules-secureConnectionStart-helptext": "這是選用屬性。沒有此屬性的使用者代理程式必須將它設為未定義。此屬性可用時，如果現行頁面方法是 HTTPS，則此屬性必須傳回使用者代理程式啟動信號交換程序以保護現行連線安全之前的立即時間。如果此屬性可用，但是未使用 HTTPS，則此屬性必須傳回零。",
				"modules-requestStart-helptext": "此屬性必須傳回使用者代理程式開始從伺服器、相關應用程式快取或本端資源中要求現行文件之前的立即時間。如果傳輸連線在傳送要求之後失敗，而且使用者代理程式重新開啟連線並重新傳送要求，則 requestStart 應該傳回新要求的對應值。",
				"modules-responseStart-helptext": "此屬性必須傳回使用者代理程式收到來自伺服器、相關應用程式快取或本端資源的回應的第一個位元組之後的立即時間。",
				"modules-responseEnd-helptext": "此屬性必須傳回使用者代理程式收到現行文件的最後一個位元組之後的立即時間，或關閉傳輸連線之前的立即時間（採用先發生者）。這裡的文件可以接收自伺服器、相關應用程式快取或本端資源。",
				"modules-domLoading-helptext": "此屬性必須傳回使用者代理程式將現行文件就緒設為「載入」之前的立即時間。",
				"modules-domInteractive-helptext": "此屬性必須傳回使用者代理程式將現行文件就緒設為「互動」之前的立即時間。",
				"modules-domContentLoadedEventStart-helptext": "此屬性必須傳回使用者代理程式在文件上激發 DOMContentLoaded 事件之前的立即時間。",
				"modules-domContentLoadedEventEnd-helptext": "此屬性必須傳回文件 DOMContentLoaded 事件完成之後的立即時間。",
				"modules-domComplete-helptext": "此屬性必須傳回使用者代理程式將現行文件就緒設為「完成」之前的立即時間。如果現行文件就緒變更為相同的狀態多次，則 domLoading、domInteractive、domContentLoadedEventStart、domContentLoadedEventEnd 及 domComplete 必須傳回對應文件就緒變更第一次出現的時間。",
				"modules-loadEventStart-helptext": "此屬性必須傳回激發現行文件的載入事件之前的立即時間。尚未激發載入事件時，它必須傳回零。",
				"modules-loadEventEnd-helptext": "此屬性必須傳回現行文件的載入事件完成時的時間。未激發載入事件或載入事件未完成時，它必須傳回零。",
				"modules-mobile-events-helptext": "啟用行動式階段作業的事件重播。",
				"modules-hashchange-helptext": "啟用時，此選項會在頁面的 URL 中識別 hashchange 時產生螢幕視圖事件。螢幕視圖事件會插入階段作業資料中，而且「UI 擷取」所擷取的 UI 事件可以組織在其發生的螢幕視圖下方。",
				"modules-scroll-winsize-helptext": "附註：根據應用程式，追蹤視窗捲動可能會產生大量事件。針對行動式階段作業，只在 BBR 中，才支援重播擷取自用戶端的捲動事件。",

                "performance-calculateRenderTime": "計算不支援「W3C 導覽計時」的瀏覽器的呈現時間",
                "performance-calculateRenderTime-helptext": "測量頁面載入與程式庫載入之間的時間差異，<br>以計算呈現時間。",
                "performance-calculateRenderTime-description": "啟用此設定時，程式庫會將呈現時間計算為其載入時間與頁面載入時間之間的差異。為了取得精確的測量，請確保在頁面載入週期盡早載入程式庫。",
				"performance-renderTimeThreshold": "renderTimeThreshold：",
				"performance-renderTimeThreshold-helptext": "呈現時間上限（毫秒）。預設值為 10 分鐘<br>（600000 毫秒）。超出臨界值的任何測量呈現時間<br>會報告為 'invalidRenderTime'，而不會包括在<br>呈現時間效能報告中。",

				"replay-customEventName-placeholder": "輸入單一事件名稱。例如：mousedown",
				"replay-customEventTarget-placeholder": "輸入目標元素的 CSS 選取器。",
				"replay-customEvent": "自訂重播事件",
				"replay-customEvent-helptext": "輸入委派目標元素、文件或視窗的 CSS 選取器",
				"replay-addCustomDelegate": "新增自訂重播事件",
				"replay-customEvent-name": "事件名稱",
				"replay-customEvent-target": "事件目標",
				"replay-customEvent-name-helptext": "在這裡輸入事件名稱。例如：mousedown",
				"replay-customEvent-target-helptext": "輸入目標元素、文件或視窗的 CSS 選取器",
				"replay-customEvent-delegateTarget": "事件委派目標（選用）",
				"replay-customEvent-delegateTarget-helptext": "輸入委派目標元素、文件或視窗的 CSS 選取器。這是選用設定。",
				"replay-customEvent-recurseFrames": "遞迴頁框（選用）",
				"replay-customEvent-recurseFrames-helptext": "勾選時，將事件的接聽器套用至文件的子頁框/iframe。這是選用設定。",
                "replay-customEvent-state": "狀態",
                "replay-customEventState-placeholder": "輸入要用作自訂事件狀態的內容",
                "replay-customEvent-state-helptext": "指定針對僅自訂重播事件，如何在 JSON 中設定 target.currState 值。",
				"replay-removeCustomEvent": "移除自訂重播",

				"domCapture-header": "DOM 擷取",
				"domCapture-enabled": "啟用 DOM 擷取",
				"domCapture-enabled-helptext": "警告：啟用「DOM 擷取」對資料傳輸及基礎架構有重大的含意。因此，應審慎地啟用此特性。若已啟用，它需要進一步的配置，才能根據特定的事件及元素來執行「DOM 擷取」。如需詳細資料，請參閱文件。",
				"domCapture-captureFrames": "擷取頁框",
				"domCapture-captureFrames-helptext": "勾選時，將會擷取子頁框及 iframe。附註：只能擷取與上層頁面本身相同之網域的來源內容。",
				"domCapture-removeScripts": "移除 Script",
				"domCapture-removeScripts-helptext": "勾選時，會移除所擷取 Snapshot 中的所有 Script 標籤。",
                "domCapture-diffEnabled": "啟用 DOM 差異",
                "domCapture-diffEnabled-helptext": "勾選時，會在起始的完整 DOM Snapshot 之後傳送 DOM 差異。建議啟用此設定。",
                "domCapture-maxLength": "長度上限",
                "domCapture-maxLength-helptext": "如果超出此臨界值，將不會傳送 Snapshot。",
                "domCapture-maxMutations": "變動數上限",
                "domCapture-maxMutations-helptext": "如果已達到或已超出此臨界值，會進行完整 DOM Snapshot 而非差異 Snapshot。您可以使用此設定來微調「DOM 擷取」配置，並設定安全限制，以防止由於處理過多的 DOM 變動而發生效能瓶頸。",
				"domCapture-subHeader": "新增 DOM 擷取觸發程式",
				"domCapture-trigger": "觸發程式",
				"domCapture-addTrigger": "新增觸發程式",
				"domCapture-event": "事件",
				"domCapture-event-helptext": "可用的事件是 load、unload、click 或 change。",
				"domCapture-screenview": "螢幕視圖",
				"domCapture-addScreenview": "新增螢幕視圖",
				"domCapture-removeScreenview": "移除螢幕視圖",
				"domCapture-delay": "延遲",
				"domCapture-delay-helptext": "選用延遲（毫秒），在此延遲之後應該進行 DOM Snapshot。",
				"domCapture-delay-placeholder": "輸入數字",
                "domCapture-fullDOMCapture": "完整 DOM 擷取",
                "domCapture-fullDOMCapture-helptext": "如果勾選此選項，將會對此觸發程式進行完整 DOM Snapshot。",
				"domCapture-removeTrigger": "移除觸發程式",
				"domCapture-addTarget": "新增目標",
				"domCapture-removeTarget": "移除目標",
				"domCapture-target": "目標",
				"domCapture-target-id": "ID",
				"domCapture-target-id-helptext": "根據三種 ID 類型指定的目標的 ID。",
				"domCapture-target-idType": "ID 類型",
				"domCapture-target-idType-helptext": "元素的 HTML ID、XPath 或「自訂 ID」。",
				"domCapture-target-cssSelector": "CSS 選取器",
				"domCapture-target-cssSelector-helptext": "新增單一 CSS 選取器字串。",
                "domCapture-load": "load",
                "domCapture-unload": "unload",
                "domCapture-click": "click",
                "domCapture-change": "change",
                "domCapture-custom": "custom",
                "domCapture-custom-eventName": "自訂事件名稱：",

                "DCCookie-header": "Cookie & 階段作業管理",
                "DCCookie-enabled": "啟用 DCCookie 模組",
                "DCCookie-enabled-helptext": "DCCookie 模組容許配置「應用程式鍵值」及「階段作業化 Cookie」。使用 Discover SaaS 服務時需要這些項目。如需相關資訊，請參閱 Discover SaaS 文件。",
                "DCCookie-dcAppKey": "應用程式鍵值",
                "DCCookie-dcAppKey-helptext": "在此欄位中輸入「Discover SaaS 應用程式鍵值」。",
                "DCCookie-sessionCookie": "階段作業化 Cookie 名稱",
                "DCCookie-sessionCookie-helptext": "指定用於階段作業化的 Cookie。指定 <strong>DCXSID</strong> 作為階段作業化 Cookie，將使得 UIC 建立 Cookie（若它尚未存在時）。",
                
                "geolocation-header": "地理定位",
                "geolocation-enable": "啟用地理定位記載",
                "geolocation-load": "載入事件期間的地理定位",
                "geolocation-load-helptext": "將在載入事件期間啟用地理定位記載",
                "geolocation-helptext": "地理定位記載會報告測量的緯度、經度及精確度（如果可用）。",

                "misc-header": "細項設定",
                "sessionData-options": "階段作業資料共用選項",
                "sessionData-Enable": "共用階段作業資料",
                "sessionData-Enable-description": "選取此選項，將會啟用階段作業資料與頁面上其他 Script 的共用。如需詳細資料，請參閱文件。",
                "sessionData-Enable-helptext": "選取此選項，將會啟用階段作業資料與頁面上其他 Script 的共用。如需詳細資料，請參閱文件。",
                "sessionId-Cookie": "Cookie",
                "sessionId-Cookie-description": "如果 Cookie 用於階段作業化，請選取此選項。",
                "sessionId-Cookie-helptext": "如果 Cookie 用於階段作業化，請選取此選項。",
                "sessionId-Query": "查詢參數",
                "sessionId-Query-description": "如果查詢參數用於階段作業化，請選取此選項。",
                "sessionId-Query-helptext": "如果查詢參數用於階段作業化，請選取此選項。",
                "sessionId-Cookie-Name": "Cookie 名稱",
                "sessionId-Cookie-Name-helptext": "用於階段作業化的 Cookie 名稱。例如，DCXSID、jsessionid 等。",
                "sessionId-Query-Name": "查詢參數名稱",
                "sessionId-Query-Name-helptext": "用於階段作業化的查詢參數名稱（即 LHS）。",
                "sessionId-Query-Delimiter": "查詢字串定界字元",
                "sessionId-Query-Delimiter-helptext": "指定應用程式所使用的查詢字串定界字元。預設值為 &",
                "sessionId-ValueNeedsHashing": "值需要雜湊處理",
                "sessionId-ValueNeedsHashingDescription": "如果值需要雜湊處理才能衍生「階段作業 ID」，請選取此選項。",
                "misc-frames-blacklist-label": "黑名單頁框",
                "misc-frames-blacklist-helptext": "排除不進行資料收集的頁框的 CSS 選取器。",
                "misc-frames-blacklist-placeholder": "以「空格逗點空格」形式區隔的 CSS 選取器。",

                "regextester-headline": "測試正規表示式",
                "regextester-regex": "RegEx",
                "regextester-flag-i": "不區分大小寫 (i)",
                "regextester-flag-g": "廣域 (g)",
                "regextester-sample": "測試範例",
                "regextester-matches": "相符？",
                "regextester-copylabel": "（備妥以複製&貼入配置中）",
                "regextester-btn-test": "測試",

                "unsupported-header": "不幸的是，瀏覽器太舊或不予支援。",
                "unsupported-sudHeader": "請使用下列其中一個瀏覽器：",
                "unsupported-infotext": "",
                "unsupported-firefox-versioninfo": "（17.0 版及以上版本）",
                "unsupported-safari-versioninfo": "（6.0 版及以上版本）",

                "validation-timerinterval": "計時器間隔無效。請輸入一個介於 1000 到 600000 之間的數字。",
                "validation-maxevents": "大小（訊息數上限）無效。請輸入一個介於 1 到 100 之間的數字。",
                "validation-renderTimeThreshold": "呈現時間臨界值無效，請輸入一個數字。",
                "validation-maxSize": "大小（序列化長度上限）無效。請輸入一個介於 4000 到 1000000 之間的數字。",

                "reload-page": "請重新載入頁面，語言變更才會生效。"
            }


        };
    /*jslint white: true */
    try {
        get = doc.getElementById.bind(doc);
        forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
    } catch (e) { }


    function sibling(node, direction) {
        var siblingNode = node[direction + "Sibling"];
        while (siblingNode && siblingNode.nodeType !== 1) {
            siblingNode = siblingNode[direction + "Sibling"];
        }
        return siblingNode || false;
    }

    function nextSlide(slide) {
        var next = sibling(slide, "next"),
            retVal = null;
        if (next !== null) {
            slide.classList.toggle("in");
            slide.classList.toggle("out");
            next.classList.toggle("in");
            retVal = next;
        }
        return retVal;
    }
    function prevSlide(slide) {
        var prev = sibling(slide, "previous"),
            retVal = null;
        if (prev !== null) {
            slide.classList.toggle("in");
            prev.classList.toggle("out");
            prev.classList.toggle("in");
            retVal = prev;
        }
        return retVal;
    }

    function addDataBinding(node) {
        node.addEventListener("change", function (e) {
            var id = e.target.id,
                displays = query("." + id);
            forEach(displays, function (display) {
                var value = e.target.value;
                if (display.dataset.replaceLangKey) {
                    value = i18n[language][display.dataset.replaceLangKey + "-" + value];
                }
                display.textContent = value;
            });
        }, false);
    }

    function replaceNumberTokens(element, token, replacement) {
        var html = element.outerHTML,
            regex = new RegExp("{n" + token + "}", "g");
        html = html.replace(regex, replacement);
        element.outerHTML = html;
    }

    function setNameAttributes(scope) {
        var elements = query("[data-name]", scope);
        forEach(elements, function (element) {
            var name = element.dataset.name;
            element.name = name;
            element.removeAttribute("data-name");
        });
    }

    function removeTemplate(e, target) {
        if (typeof e.preventDefault === "function") {
            e.preventDefault();
        }
        var idLink = (target || e.target).id,
            idElement = idLink.replace("-removeTarget", ""),
            element = document.getElementById(idElement);
        element.parentNode.removeChild(element);
    }

    function addTemplate(e, target) {
        if (typeof e.preventDefault === "function") {
            e.preventDefault();
        }
        var id = (target || e.target).dataset.id,
            template = get(id),
            radix = 10,
            idCounter,
            newId,
            replacementToken = (target || e.target).dataset.replacementToken,
            newElement = template.cloneNode(true),
            node,
            replayConfiguration = document.getElementById("config-modules-replay-filter-configuration"),
            replayDelegateTarget,
            replayDelegateTargetLabel,
            replayDelegateTargetSpan,
            replayRecurseFramesTarget,
            selectData,
            selectTarget,
            inputs,
            oldValue,
            i;
        template.dataset.idCounter = (parseInt(template.dataset.idCounter, radix) + 1);
        idCounter = parseInt(template.dataset.idCounter, radix);
        newId = id + "-" + idCounter;
        newElement.classList.remove("template");
        newElement.id = newId;
        newElement.removeAttribute("data-id-counter");
        if (newElement.tagName === "DETAILS") {
            newElement.open = true;
        }
        setNameAttributes(newElement);
        template.parentNode.appendChild(newElement);
        node = sibling(template.parentNode.lastChild, "previous");
        while (node) {
            if (node.tagName === "DETAILS") {
                node.open = false;
            }
            node = sibling(template, "previous");
        }
        replaceNumberTokens(get(newId), replacementToken, idCounter);
        addDataBinding(get(newId));
        forEach(query(".add-more", get(newId)), function (link) {
            attachAddMoreHandler(link);
            if (link.classList.contains("add-instantly")) {
                addTemplate({}, link);
            }
        });
        forEach(query(".remove-instantly", get(newId)), function (link) {
            attachRemoveInstantlyHandler(link);
        });
        if (id === "config-modules-replay-filter-configuration") {
            replayRecurseFramesTarget = document.getElementsByName("config.core.modules.replay.events.custom[" + idCounter + "].recurseFrames")[0];
            replayRecurseFramesTarget.addEventListener("change", function (ev) {
                if (ev.target.checked) {
                    replayRecurseFramesTarget.value = "true";
                } else {
                    replayRecurseFramesTarget.value = "false";
                }
            }, false);

            if (document.getElementById("browserService-w3c").checked) {
                for (i = 0; i <= idCounter; i += 1) {
                    replayDelegateTargetSpan = document.getElementById("config-modules-replay-filter-" + i + "-delegateTarget-span");
                    replayDelegateTarget = document.getElementById("config-modules-replay-filter-" + i + "-delegateTarget");
                    replayDelegateTargetLabel = document.getElementById("config-modules-replay-filter-" + i + "-delegateTarget-label");
                    if (replayDelegateTarget) {
                        replayDelegateTargetSpan.style.display = "none";
                        replayDelegateTarget.style.display = "none";
                        replayDelegateTargetLabel.style.display = "none";
                    }
                }
            }
        }
        selectData = document.getElementById("config-modules-replay-domCapture-filter-" + idCounter + "-event");
        //Handle changes to the HTML when a user changes an option in a specified select
        if (selectData) {
            oldValue = "load";
            selectData.addEventListener("change", function (ev) {
                selectTarget = get(selectData.dataset.select + "-" + oldValue);
                inputs = query("input, select, textarea", selectTarget);
                forEach(inputs, function (input) {
                    input.disabled = true;
                    input.style.display = "none";
                });
                selectTarget = get(selectData.dataset.select + "-" + ev.target.value);
                inputs = query("input, select, textarea", selectTarget);
                forEach(inputs, function (input) {
                    input.disabled = false;
                    input.style.display = "block";
                });
                var partialId = ev.target.id.match("config-(.*)event")[1],
                    target = document.getElementById(partialId + ev.target.value);
                forEach(query("[data-selectoption]"), function (select) {
                    if (select.dataset.selectoption.match("[0-9]+")[0] === target.dataset.selectoption.match("[0-9]+")[0]) {
                        if (select.dataset.selectoption === target.dataset.selectoption) {
                            select.style.display = "block";
                            select.disabled = false;
                        } else {
                            select.style.display = "none";
                            select.disabled = true;
                        }
                    }
                }, false);
                if (ev.target.value === "custom") {
                    document.getElementById("config-modules-replay-domCapture-filter-" + idCounter + "-customEventName").style.display = "block";
                    document.getElementById("config-modules-replay-domCapture-filter-" + idCounter + "-customEventName").style.disabled = "false";
                    document.getElementById("config-modules-replay-domCapture-filter-" + idCounter + "-customEventName-label").style.display = "block";
                    document.getElementById("config-modules-replay-domCapture-filter-" + idCounter + "-customEventName-label").style.disabled = "false";
                } else {
                    document.getElementById("config-modules-replay-domCapture-filter-" + idCounter + "-customEventName").style.display = "none";
                    document.getElementById("config-modules-replay-domCapture-filter-" + idCounter + "-customEventName").style.disabled = "true";
                    document.getElementById("config-modules-replay-domCapture-filter-" + idCounter + "-customEventName-label").style.display = "none";
                    document.getElementById("config-modules-replay-domCapture-filter-" + idCounter + "-customEventName-label").style.disabled = "true";
                }
                oldValue = ev.target.value;
            });
        }
    }

    attachAddMoreHandler = function (link) {
        link.addEventListener("click", addTemplate, false);
    };

    attachRemoveInstantlyHandler = function (link) {
        link.addEventListener("click", removeTemplate, false);
    };

    function setInputStates(node, state) {
        forEach(node.childNodes, function (node) {
            node.disabled = state;
        });
    }

    function localize(element) {
        var innerHTML = element.innerHTML,
            key,
            regex;
        for (key in i18n[language]) {
            if (i18n[language].hasOwnProperty(key)) {
                regex = new RegExp("{{\\s?" + key + "\\s?}}", "g");
                innerHTML = innerHTML.replace(regex, i18n[language][key]);
            }
        }
        element.innerHTML = innerHTML;
    }

    function getNodesValue(nodes) {
        return Array.prototype.reduce.call(nodes, function (prev, input) {
            if (input.value) {
                if (prev !== "") {
                    prev += ", ";
                }
                prev += input.value;
            }

            return prev;
        }, "");
    }
    function validateRenderTimeThreshold() {
        var renderTimeThreshold = document.getElementById("config.modules.performance.renderTimeThreshold").value,
            renderTimeThresholdIsDigit = /^\d+$/.test(renderTimeThreshold);
        if (renderTimeThresholdIsDigit) {
            if (parseFloat(renderTimeThreshold) >= 0) {
                return true;
            }
            alert(i18n[language]["validation-renderTimeThreshold"]);
            return false;
        }
        alert(i18n[language]["validation-renderTimeThreshold"]);
        return false;
    }
    function validateTimerInterval() {
        var timerInterval = document.getElementById("services-queue-0-timerinterval").value,
            timerIntervalIsDigit = /^\d+$/.test(timerInterval);
        if (timerIntervalIsDigit) {
            if (parseFloat(timerInterval) === 0 || (parseFloat(timerInterval) >= 1000 && parseFloat(timerInterval) <= 600000)) {
                return true;
            }
            alert(i18n[language]["validation-timerinterval"]);
            return false;

        }
        alert(i18n[language]["validation-timerinterval"]);
        return false;

    }
    function validateMaxEvents() {
        var maxEvents = document.getElementById("services-queue-0-maxEvents").value,
            maxEventsIsDigit = /^\d+$/.test(maxEvents);
        if (maxEventsIsDigit) {
            if (parseFloat(maxEvents) < 100 && parseFloat(maxEvents) > 0) {
                return true;
            }
            alert(i18n[language]["validation-maxevents"]);
            return false;
        }
        alert(i18n[language]["validation-maxevents"]);
        return false;
    }
    function validateMaxSize() {
        var maxSize = document.getElementById("services-queue-0-maxSize").value,
            maxSizeIsDigit = /^\d+$/.test(maxSize);
        if (maxSizeIsDigit) {
            if (parseFloat(maxSize) === 0 || (parseFloat(maxSize) <= 1000000 && parseFloat(maxSize) >= 4000)) {
                return true;
            }
            alert(i18n[language]["validation-maxSize"]);
            return false;
        }
        alert(i18n[language]["validation-maxSize"]);
        return false;
    }
    function validateInputs() {
        //To be extended as more input validation functions are written
        var isTimerIntervalTrue = validateTimerInterval(),
            isMaxEventsTrue = validateMaxEvents(),
            isMaxSizeTrue = validateMaxSize(),
            isRenderTimeThresholdTrue = validateRenderTimeThreshold();

        if (isTimerIntervalTrue && isMaxEventsTrue && isMaxSizeTrue && isRenderTimeThresholdTrue) {
            return true;
        }
        return false;
    }

    function init() {

        get("main-container").style.height = window.innerHeight - 4 + "px";

        doc.title = i18n[language]["site-title"];

        forEach(query(".data-bindings"), addDataBinding);
        forEach(query(".add-more"), attachAddMoreHandler);

        addTemplate({}, get('services-serializer-addParser'));
        addTemplate({}, get('services-serializer-addStringifier'));

        query(".services-message-privacy-configurations")[0].addEventListener("change", function (e) {
            var id, option, functionDef;
            if (e.target.classList.contains("services-message-privacy-target")) {
                id = e.target.dataset.privacyConfigId;
                query(".services-message-privacy-" + id + "-targets")[0].innerText =
                    getNodesValue(query(".services-message-privacy-target-" + id));
            } else if (e.target.classList.contains("services-message-privacy-maskType")) {
                option = e.target.value;
                functionDef = query(".services-message-privacy-maskFunctionDefinition", e.target.parentNode.parentNode);
                if (option === "4") {
                    forEach(functionDef, function (el) {
                        var textarea = query(".escapedFunction", el)[0];
                        el.style.display = "block";
                        if (textarea) {
                            textarea.disabled = false;
                        }
                    });
                } else {
                    forEach(functionDef, function (el) {
                        var textarea = query(".escapedFunction", el)[0];
                        el.style.display = "none";
                        if (textarea) {
                            textarea.disabled = true;
                        }
                    });
                }
            }
        }, false);

        query(".services-serializer")[0].addEventListener("change", function (e) {
            if (e.target.classList.contains("services-serializer-parsers")) {
                query(".services-serializer-parsers-values")[0].innerText =
                    getNodesValue(query(".services-serializer-parsers"));
            } else if (e.target.classList.contains("services-serializer-stringifiers")) {
                query(".services-serializer-stringifiers-values")[0].innerText =
                    getNodesValue(query(".services-serializer-stringifiers"));
            }
        });

        forEach(query("[data-toggles]"), function (checkbox) {
            var target = get(checkbox.dataset.toggles),
                inputs = query("input, select, textarea", target);
            checkbox.addEventListener("change", function (ev) {
                if (ev.target.checked) {
                    target.style.display = "block";
                    forEach(inputs, function (input) { input.disabled = false; });
                } else {
                    target.style.display = "none";
                    forEach(inputs, function (input) { input.disabled = true; });
                }
            }, false);
        });

        forEach(query(".sessionIdChoice"), function (radio) {
            var cookieContainer = get("misc-sessionId-Cookie-container"),
                queryContainer = get("misc-sessionId-Query-container"),
                cookieInputs = query("input, select, textarea", cookieContainer),
                queryInputs = query("input, select, textarea", queryContainer);

            radio.addEventListener("change", function (ev) {
                if (ev.target.value === "Cookie") {
                    // Enable the cookie container, disable the cookie container
                    cookieContainer.style.display = "block";
                    queryContainer.style.display = "none";
                    forEach(cookieInputs, function (input) { input.disabled = false; });
                    forEach(queryInputs, function (input) { input.disabled = true; });
                } else {
                    // Enable the query container, disable the cookie container
                    queryContainer.style.display = "block";
                    cookieContainer.style.display = "none";
                    forEach(queryInputs, function (input) { input.disabled = false; });
                    forEach(cookieInputs, function (input) { input.disabled = true; });
                }
            }, false);
        });

        query(".core-modules-replay-events")[0].addEventListener("change", function (e) {
            setInputStates(query("." + e.target.id)[0], !e.target.checked);
        }, false);

        forEach(query(".browserService"), function (checkbox) {
            var w3cContainer = get("services-browser-w3c-container"),
                w3cInputs = query("input, select, textarea", w3cContainer),
                jQueryContainer = get("services-browser-jQuery-container"),
                jQueryInputs = query("input, select, textarea", jQueryContainer),
                i = 0,
                replayDelegateTarget,
                replayDelegateTargetLabel,
                replayDelegateTargetSpan,
                replayConfiguration = document.getElementById("config-modules-replay-filter-configuration");

            checkbox.addEventListener("change", function (ev) {
                if (ev.target.value === "w3c") {
                    w3cContainer.style.display = "block";
                    forEach(w3cInputs, function (input) { input.disabled = false; });
                    // Disable jQuery service specific options
                    jQueryContainer.style.display = "none";
                    forEach(jQueryInputs, function (input) { input.disabled = true; });
                    for (i = 0; i <= replayConfiguration.dataset.idCounter; i += 1) {
                        replayDelegateTargetSpan = document.getElementById("config-modules-replay-filter-" + i + "-delegateTarget-span");
                        replayDelegateTarget = document.getElementById("config-modules-replay-filter-" + i + "-delegateTarget");
                        replayDelegateTargetLabel = document.getElementById("config-modules-replay-filter-" + i + "-delegateTarget-label");
                        if (replayDelegateTarget) {
                            replayDelegateTargetSpan.style.display = "none";
                            replayDelegateTarget.style.display = "none";
                            replayDelegateTargetLabel.style.display = "none";
                        }
                    }
                } else {
                    jQueryContainer.style.display = "block";
                    forEach(jQueryInputs, function (input) { input.disabled = false; });
                    // Disable W3C service specific options
                    w3cContainer.style.display = "none";
                    forEach(w3cInputs, function (input) { input.disabled = true; });
                    for (i = 0; i <= replayConfiguration.dataset.idCounter; i += 1) {
                        replayDelegateTargetSpan = document.getElementById("config-modules-replay-filter-" + i + "-delegateTarget-span");
                        replayDelegateTarget = document.getElementById("config-modules-replay-filter-" + i + "-delegateTarget");
                        replayDelegateTargetLabel = document.getElementById("config-modules-replay-filter-" + i + "-delegateTarget-label");
                        if (replayDelegateTarget) {
                            replayDelegateTargetSpan.style.display = "inline";
                            replayDelegateTarget.style.display = "block";
                            replayDelegateTargetLabel.style.display = "block";
                        }
                    }
                }
            }, false);
        });

        get("btn-prev").addEventListener("click", function (e) {
            e.preventDefault();
            var curr = query(".in")[0],
                prev = prevSlide(curr);
            if (!sibling(sibling(curr, "previous"), "previous")) {
                this.setAttribute("disabled", "disabled");
            } else {
                this.removeAttribute("disabled");
            }
            get("btn-next").removeAttribute("disabled");
        }, false);


        get("btn-next").addEventListener("click", function (e) {
            e.preventDefault();
            var curr = query(".in")[0],
                next = nextSlide(curr);
            if (!sibling(sibling(curr, "next"), "next")) {
                this.setAttribute("disabled", "disabled");
            } else {
                this.removeAttribute("disabled");
            }
            get("btn-prev").removeAttribute("disabled");
        }, false);

        function generateConfig() {
            var functions = {},
                form,
                is_w3c,
                libraryType,
                changeTarget,
                config,
                i,
                j,
                k,
                cssSelectorString,
                privacy,
                len,
                propertyName,
                processedStr,
                regEx;
            forEach(query(".escapedFunction"), function (textarea) {
                functions[textarea.id] = textarea.value;
            });
            form = form2js(get("configwizard-form"));
            is_w3c = form.browserService === "w3c";
            changeTarget = is_w3c ? get("UIC-SDK-FILE-changetarget").textContent : "var changeTarget;\n";
            libraryType = get("library-type").value;
            if (form.config.core.ieExcludedLinks) {
                form.config.core.ieExcludedLinks = form.config.core.ieExcludedLinks.split(",");
            }
            if (form.config.services.browser && form.config.services.browser.blacklist) {
                    // Need to split by "space comma space" to not split at commas in JSON objects.
                form.config.services.browser.blacklist = form.config.services.browser.blacklist.split(" , ");
                forEach(form.config.services.browser.blacklist, function (blacklisted, i) {
                    if (blacklisted[0] === "{") {
                        blacklisted = JSON.parse(blacklisted);
                        form.config.services.browser.blacklist[i] = blacklisted;
                    }
                });
            }
            if (form.config.services.message && form.config.services.message.privacy) {
                for (i = form.config.services.message.privacy.length - 1; i >= 0; i -= 1) {
                    privacy = form.config.services.message.privacy[i];
                    if (privacy.targets) {
                        privacy.targets = privacy.targets.filter(function (target) {
                            return target.id !== undefined || target.cssSelector !== undefined;
                        });
                        for (j = privacy.targets.length - 1; j >= 0; j -= 1) {
                            if (privacy.targets[j].cssSelector !== undefined) {
                                privacy.targets.push(privacy.targets[j].cssSelector);
                                delete privacy.targets[j].cssSelector;
                            }
                            if (typeof privacy.targets[j].id !== typeof privacy.targets[j].idType) {
                                privacy.targets.splice(j, 1);
                            }
                        }
                    }
                    if (privacy.targets.length === 0) {
                        form.config.services.message.privacy.splice(i, 1);
                    }
                }
                if (form.config.services.message.privacy.length === 0) {
                    delete form.config.services.message;
                }
            }
            if (form.config.services.serializer && form.config.services.serializer.json) {
                if (!form.config.services.serializer.json.defaultToBuiltin) {
                    form.config.services.serializer.json.defaultToBuiltin = false;
                }
                if (!form.config.services.serializer.json.parsers) {
                    form.config.services.serializer.json.parsers = [];
                } else {
                    for (i = form.config.services.serializer.json.parsers.length - 1; i >= 0; i -= 1) {
                        if (form.config.services.serializer.json.parsers[i].length === 0) {
                            form.config.services.serializer.json.parsers.splice(i, 1);
                        }
                    }
                }
                if (!form.config.services.serializer.json.stringifiers) {
                    form.config.services.serializer.json.stringifiers = [];
                } else {
                    for (i = form.config.services.serializer.json.stringifiers.length - 1; i >= 0; i -= 1) {
                        if (form.config.services.serializer.json.stringifiers[i].length === 0) {
                            form.config.services.serializer.json.stringifiers.splice(i, 1);
                        }
                    }
                }
            }
            if (form.config.core.modules) {
                if (form.config.core.modules.replay) {
                    if (form.config.core.modules.replay.events) {
                        if (form.config.core.modules.replay.events.custom) {
                            form.config.core.modules.replay.events.custom.forEach(function (replayDelegate) {
                                if (replayDelegate.name) {
                                    if (!replayDelegate.recurseFrames) {
                                        replayDelegate.recurseFrames = false;
                                    }
                                    if (is_w3c) {
                                        delete replayDelegate.delegateTarget;
                                        form.config.core.modules.replay.events.push(replayDelegate);
                                    } else {
                                        form.config.core.modules.replay.events.push(replayDelegate);
                                    }
                                }
                            });
                            delete form.config.core.modules.replay.events.custom;
                        }
                    }
                }
            }
            if (form.config.modules) {
                if (form.config.modules.replay) {
                    if (form.config.modules.replay.domCapture) {
                        if (!form.config.modules.replay.domCapture.enabled) {
                            delete form.config.modules.replay.domCapture;
                        }
                    }
                    if (form.config.modules.replay.domCapture) {
                        if (form.config.modules.replay.domCapture.triggers) {
                            for (i = 0; i < form.config.modules.replay.domCapture.triggers.length; i += 1) {
                                if (form.config.modules.replay.domCapture.triggers[i].event === "click" || form.config.modules.replay.domCapture.triggers[i].event === "change" || form.config.modules.replay.domCapture.triggers[i].event === "custom") {
                                    if (form.config.modules.replay.domCapture.triggers[i].targets) {
                                        for (j = 0; j < form.config.modules.replay.domCapture.triggers[i].targets.length; j += 1) {
                                            if (typeof form.config.modules.replay.domCapture.triggers[i].targets[j] !== "string") {
                                                if (!form.config.modules.replay.domCapture.triggers[i].targets[j].id  && !form.config.modules.replay.domCapture.triggers[i].targets[j].cssSelector) {
                                                    //delete the target if idType is specified but no ID or CSS Selector is specified
                                                    form.config.modules.replay.domCapture.triggers[i].targets.splice(j, 1);
                                                    //subtract one from j because targets becomes one smaller
                                                    j -= 1;
                                                } else {
                                                    if (form.config.modules.replay.domCapture.triggers[i].targets[j].cssSelector) {
                                                        //the css selector should be a string in the target array, not part of the object cssSelctor
                                                        cssSelectorString = form.config.modules.replay.domCapture.triggers[i].targets[j].cssSelector;
                                                        delete form.config.modules.replay.domCapture.triggers[i].targets[j].cssSelector;
                                                        form.config.modules.replay.domCapture.triggers[i].targets.push(cssSelectorString);
                                                    }
                                                    if (!form.config.modules.replay.domCapture.triggers[i].targets[j].id) {
                                                        //delete the target if idType is specified but no ID is specified after having moved the cssSelector
                                                        form.config.modules.replay.domCapture.triggers[i].targets.splice(j, 1);
                                                        //subtract one from j because targets becomes one smaller
                                                        j -= 1;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (form.config.modules.replay.domCapture.triggers[i].event === "custom") {
                                        form.config.modules.replay.domCapture.triggers[i].event = form.config.modules.replay.domCapture.triggers[i].customEventName;
                                    }
                                    delete form.config.modules.replay.domCapture.triggers[i].customEventName;
                                } else if (form.config.modules.replay.domCapture.triggers[i].event === "unload" || form.config.modules.replay.domCapture.triggers[i].event === "load") {
                                    if (form.config.modules.replay.domCapture.triggers[i].targets) {
                                        //remove targets from unload and load events, load and unload events only have screenviews
                                        delete form.config.modules.replay.domCapture.triggers[i].targets;
                                    }
                                }
                                if (form.config.modules.replay.domCapture.triggers[i].targets) {
                                    if (form.config.modules.replay.domCapture.triggers[i].targets.length === 0 || form.config.modules.replay.domCapture.triggers[i].targets === undefined) {
                                        delete form.config.modules.replay.domCapture.triggers[i].targets;
                                    }
                                }
                            }
                        }
                        if (form.config.modules.replay.domCapture.options) {
                            if (!form.config.modules.replay.domCapture.options.captureFrames) {
                                form.config.modules.replay.domCapture.options.captureFrames = false;
                            }
                            if (!form.config.modules.replay.domCapture.options.removeScripts) {
                                form.config.modules.replay.domCapture.options.removeScripts = false;
                            }
                            if (!form.config.modules.replay.domCapture.options.diffsEnabled) {
                                form.config.modules.replay.domCapture.options.diffsEnabled = false;
                            }
                        }
                    }
                }
            }
            if (!form.config.services.queue.asyncReqOnUnload) {
                form.config.services.queue.asyncReqOnUnload = false;
            }
            if (form.config.core.framesBlacklist) {
                form.config.core.framesBlacklist = form.config.core.framesBlacklist.split(" , ");
            }
            //add the encoder to the queue configuration
            if (form.config.services.encoder) {
                //currently only gzip is supported and currently the config wiz only configures one queue named DEFAULT
                form.config.services.queue.queues[0].encoder = "gzip";
            }

            // Stringify 'beautiful' (with two spaces indentation) if it is a development build.
            config = JSON.stringify(form.config, null, (libraryType === "-prod" || libraryType === "-dev" ? 2 : 0))
                .replace(/"(window||document||changeTarget||true||false||\d+)"/g, "$1");
            for (propertyName in functions) {
                if (functions.hasOwnProperty(propertyName)) {
                    RegExp.handleSpecialChars = function (str) {
                        return str.replace(/[\[\^\$\.\|\?\*\+\(\)]/g, "\\$&");
                    };
                    RegExp.handleBackSlash = function (str) {
                        return str.replace(/[\\]/g, "\\\\\\$&");
                    };
                    RegExp.handleNewLine = function (str) {
                        return str.replace(/(\n|\r)/g, "\\\\n");
                    };
                    processedStr = RegExp.handleNewLine(RegExp.handleSpecialChars(RegExp.handleBackSlash(functions[propertyName])));
                    regEx = new RegExp("\"" + processedStr + "\"", "g");
                    functions[propertyName] = functions[propertyName].replace(/(\n|\r)/g, " ");
                    config = config.replace(regEx, function (match) {
                        return functions[propertyName];
                    });
                }
            }
            return config;
        }

        configText = function writeConfig() {
            return generateConfig();
        };

        get("btn-finish").addEventListener("click", function (e) {
            e.preventDefault();
            if (validateInputs()) {
                var SDK,
                    form,
                    libraryType,
                    is_w3c,
                    intro,
                    outro,
                    changeTarget,
                    blob;
                form = form2js(get("configwizard-form"));
                libraryType = get("library-type").value;
                SDK = get("UIC-SDK-FILE-" + form.browserService + libraryType).textContent;
                is_w3c = form.browserService === "w3c";
                intro = is_w3c ? "(function () {" : "";
                outro = is_w3c ? "\n}());" : "";
                changeTarget = is_w3c ? get("UIC-SDK-FILE-changetarget").textContent : "var changeTarget;\n";
                // Use application/octet-stream to force download.
                blob = createBlob([SDK, "\n", intro, changeTarget, "DCX.init(" + generateConfig() + ");", outro], { type: "application/javascript" });
                saveAs(blob, "discover-" + form.browserService + libraryType + ".js");
            }
        }, false);

        get("btn-reset").addEventListener("click", function (e) {
            var i,
                j,
                k,
                privacyConfiguration = document.getElementById("messageService-privacyconfiguration"),
                parserConfiguration = document.getElementById("services-serializer-parsers-template"),
                serializerConfiguration = document.getElementById("services-serializer-stringifiers-template"),
                replayConfiguration = document.getElementById("config-modules-replay-filter-configuration"),
                domConfiguration = document.getElementById("config-modules-replay-domCapture-filter-configuration");
            e.preventDefault();
            get("configwizard-form").reset();
            forEach(query("[data-toggles]"), function (checkbox) {
                var target = get(checkbox.dataset.toggles),
                    inputs = query("input, select, textarea", target);
                if (checkbox.checked) {
                    target.style.display = "block";
                    forEach(inputs, function (input) {
                        input.disabled = false;
                    });
                } else {
                    target.style.display = "none";
                    forEach(inputs, function (input) {
                        input.disabled = true;
                    });
                }
            });
            privacyConfiguration.dataset.idCounter = 0;
            while (privacyConfiguration.nextElementSibling !== null) {
                privacyConfiguration.nextElementSibling.parentNode.removeChild(privacyConfiguration.nextElementSibling);
            }
            document.getElementById("service-serializer-parsers-values").innerHTML = "";
            while (parserConfiguration.nextElementSibling !== null) {
                parserConfiguration.nextElementSibling.parentNode.removeChild(parserConfiguration.nextElementSibling);
            }
            document.getElementById("service-serializer-stringifiers-values").innerHTML = "";
            while (serializerConfiguration.nextElementSibling !== null) {
                serializerConfiguration.nextElementSibling.parentNode.removeChild(serializerConfiguration.nextElementSibling);
            }
            replayConfiguration.dataset.idCounter = 0;
            while (replayConfiguration.nextElementSibling !== null) {
                replayConfiguration.nextElementSibling.parentNode.removeChild(replayConfiguration.nextElementSibling);
            }
            domConfiguration.dataset.idCounter = 0;
            while (domConfiguration.nextElementSibling !== null) {
                domConfiguration.nextElementSibling.parentNode.removeChild(domConfiguration.nextElementSibling);
            }
            this.setAttribute("disabled", "disabled");
        }, false);
        get("btn-language").addEventListener("change", function(e){
            document.cookie = "language=" + e.target.value;
            language = e.target.value;
            alert(i18n[language]["reload-page"]);
        }, false);
        get("configwizard-form").addEventListener("change", function (e) {
            get("btn-reset").removeAttribute("disabled");
            if (e.target.classList.contains("browserService")) {
                get("btn-finish").removeAttribute("disabled");
            }
        }, false);

        get("btn-regextester").addEventListener("click", function (e) {
            get("regextester").classList.toggle("visible");
        }, false);

        get("close-regex").addEventListener("click", function (e) {
            get("regextester").classList.toggle("visible");
        }, false);

        get("btn-testregex").addEventListener("click", function (e) {
            var regexStr = get("regextester-regex").value,
                flagI = get("regextester-flag-i"),
                flagG = get("regextester-flag-g"),
                flags = (flagI.checked ? "i" : "") + (flagG.checked ? "g" : ""),
                sample = get("regextester-sample").value,
                output = get("regextester-output"),
                copyoutput = get("regextester-copyregex"),
                regex,
                test;
            if (flags === "") {
                flags = undefined;
            }
            regex = new RegExp(regexStr, flags);
            test = regex.test(sample);
            copyoutput.value = JSON.stringify({ regex: regex.source, flags: flags });
            copyoutput.focus();
            copyoutput.select();
            if (test) {
                output.classList.remove("regextester-no-match");
                output.classList.add("regextester-match");
                output.innerHTML = "true";
            } else {
                output.classList.add("regextester-no-match");
                output.classList.remove("regextester-match");
                output.innerHTML = "false";
            }
        }, false);

    }

    try {
        (function () {
            var testElement = doc.createElement("a"),
                supportsQuerySelectorAll = doc.querySelectorAll !== undefined,
                supportsDataSet = testElement && (testElement.hasOwnProperty("dataset") || !!testElement.dataset),
                supportsClassList = testElement && (testElement.hasOwnProperty("classList") || !!testElement.classList),
                supportsw3cEvents = typeof window.addEventListener === "function",
                supportsForEach = typeof Array.prototype.forEach === "function",
                supportsBlob = typeof createBlob === "function",
                supportsBind = typeof Function.prototype.bind === "function",
                isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;
            if (!supportsQuerySelectorAll || !supportsDataSet || !supportsClassList || !supportsw3cEvents || !supportsForEach || !supportsBlob || !supportsBind) {
                throw { message: "Browser not supported!", code: "NOTSUPPORTED" };
            }
            if (isFirefox) {
                if (navigator.userAgent.split("Firefox/")[1] < 17) {
                    throw { message: "Browser not supported!", code: "NOTSUPPORTED" };
                }
            }
        }());

        localize(get("main-container"));
        init();
    } catch (e2) {
        localize(doc.getElementById("notsupported"));
        doc.getElementById("main-container").style.display = "none";
        doc.getElementById("notsupported").style.display = "block";
    }

}(this));