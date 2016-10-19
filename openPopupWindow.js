/**
 * Created by stroml on 19.10.16.
 */


function openPopupWindow(name, url, width,height) {
    var feature = "status=1";
    try {
        openStdWin(url, name, width, height, feature);
        return true;
    }catch(err){
        console.log(err.message);
        return true;
    }
}



/**
 * Opens a popup window
 *
 *Syntax:   openPopupWindow(name, url, width,height)
 *Parameter:
 *          var url = String
 *          var name = String
 *          var width = Int
 *          var height = Int
 *
 *Example:  openPopupWindow("popup", "https://possibleLink.crm4.dynamics.com/main.aspx#235127225", 800,600)

 *
 *Return:
 *          Success:    Returns true
 *          Error:    Returns false
 *
 *Notes:
 *          Tested for Microsoft Dynamics CRM 2016
 */
