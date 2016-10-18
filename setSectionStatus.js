/**
 * Created by stroml on 18.10.16.
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
