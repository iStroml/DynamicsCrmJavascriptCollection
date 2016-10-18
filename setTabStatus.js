/**
 * Created by stroml on 18.10.16.
 */



function setTabStatus (tabName, status)
{
    var tab = Xrm.Page.ui.tabs.get(tabname);
    if (tab == null) {
        consol.log("Error: The tab: " + tabname + " is not on the form");
        return false;
    }
    else {
        var tabsections =  tab.sections.get();
        for (var i in tabsections) {
            var secname = tabsections[i].getName();
            setSectionStatus(tabName, status);
        }
        return true;
    }
}  


/**
 *Syntax:   setTabStatus(tabName, status)
 *Parameter:
 *          tabName    =   String
 *          status     =   Boolean
 *
 *Example:
 *          setSectionStatus("Contacts",true);
 *
 *Return:
 *          Success:    Returns true
 *          Error:    Returns false
 *
 *Notes:
 *          Tested for Microsoft Dynamics CRM 2016
 */




function setSectionStatus (sectionName, status)
{
    try {
        var ctrlName = Xrm.Page.ui.controls.get();
        for (var i in ctrlName) {
            var ctrl = ctrlName[i];
            var ctrlSection = ctrl.getParent().getName();
            if (ctrlSection == sectionName) {
                ctrl.setDisabled(status);
            }
        }
        return true;
    }catch (err){
        return (err.message);
    }
}


/**
 *Syntax:   setSectionStatus(sectionName,status)
 *Parameter:
 *          sectionName    =   String
 *          status         =   Boolean
 *
 *Example:
 *          setSectionStatus("Contacts",true);
 *
 *Return:
 *          Success:    Returns true
 *          Error:    Returns err.message
 *
 *Notes:
 *          Tested for Microsoft Dynamics CRM 2016
 */
