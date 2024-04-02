<%@ Page Language="C#" Debug="false" EnableEventValidation="false" EnableSessionState="ReadOnly" EnableTheming="false" EnableViewState="false" %>
<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="System.Net" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<script language="C#" runat="server">
    /*
     * NOTE:  This is a sample page.  Please review and modify it to avoid any security threats as per your organization
     * specific policies.  The Target Page needs to receive the full POST content from the UI SDK client before writing
     * the response.  As long as it is configured to do so without dropping any packets, you may modify this page.
     */
    const String DCX_TARGET_VERSION = "12.1.11";
    // DiscoverUIPost.aspx response content type
    const String DCX_TARGET_RESP_CONTENT_TYPE = "text/plain";
    // NOTE: Update the DCX_MAX_REQ_LENGTH setting to reflect the typical POST data size specific to your deployment.
    const long DCX_MAX_REQ_LENGTH = 20000;

    String ProcessPost()
    {
        Response.ContentType = DCX_TARGET_RESP_CONTENT_TYPE;

        // Ensure all bytes are read from the request before the response is generated
        if (Request.HttpMethod.Equals("POST"))
        {
            long totalLength = 0;
            DateTime Start = DateTime.Now;
            StringBuilder HTML = new StringBuilder(64);

            HTML.AppendLine();

            try
            {
              totalLength = Request.TotalBytes > DCX_MAX_REQ_LENGTH ? DCX_MAX_REQ_LENGTH : Request.TotalBytes;
              totalLength = Request.InputStream.Seek(totalLength, System.IO.SeekOrigin.Begin);
            }
            catch (Exception e)
            {
              HTML.AppendLine("<br>Exception when reading request data!" + e.ToString());
            }

            HTML.AppendLine("<br>Read " + totalLength + " bytes.");

            return HTML.ToString();
        }

        return String.Empty;
    }

</script>
<html>
<head><title>DiscoverUIPost.aspx</title></head>
<body>
<p>Discover Target Version <% =DCX_TARGET_VERSION %></p>
<p><% =ProcessPost() %></p>
</body>
</html>
