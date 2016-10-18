/**
 * Created by stroml on 17.10.16.
 */


function getOrganisationDetails() {
    var result = new Array(4);
    try{
        result[0] = Xrm.Page.context.getOrgUniqueName(); // OrganisationName
        result[1] = Xrm.Page.context.getServerUrl(); //Serverurl
        result[2] = Xrm.Page.data.entity.getId(); //EntityID
        result[3] = Xrm.Page.data.entity.getEntityName(); //EntityName
    }catch (err) {
        console.log(err.message);
        debugger;
    }
    return result;
}

/**
 *Syntax:   getOrganisationDetails()
 *Parameter:
 *
 *Example:
 *          getOrganisationDetails();
 *
 *Return:
 *          Success:    Returns array
 *              [0]     OrganisationName
 *              [1]     Serverurl
 *              [2]     EntityID
 *              [3]     EntityName
 *          Error:    Returns array, Console.log errorcode, opens debugger
 *              [0]     null
 *              [1]     null
 *              [2]     null
 *              [3]     null
 *
 *Notes:
 *          Tested for Microsoft Dynamics CRM 2016
 */



function RunWorkflow(sEntityTypeCode,sWorkflowId,iWindowPosX,iWindowPosY) {
    var a = new Array(crmFormSubmit.crmFormSubmitId.value);
    var sIds = crmFormSubmit.crmFormSubmitId.value+";";

    try {
        openStdDlg(prependOrgName("/_grid/cmds/dlg_runworkflow.aspx") + "?iObjType=" + CrmEncodeDecode.CrmUrlEncode(sEntityTypeCode) + "&iTotal=" +
            CrmEncodeDecode.CrmUrlEncode(a.length) + "&wfId=" + CrmEncodeDecode.CrmUrlEncode(sWorkflowId) + "&sIds=" + CrmEncodeDecode.CrmUrlEncode(sIds), a, iWindowPosX, iWindowPosY);
        return true;
    }catch(err){
        return err.message;
    }
}


/**
 *Syntax:   RunWorkflow(sEntityTypeCode,sWorkflowId,iWindowPosX,iWindowPosY)
 *Parameter:
 *          sEntityTypeCode     =   String
 *          sWorkflowId         =   String
 *          iWindowPosX         =   Int
 *          iWindowPosY         =   Int
 *
 *Example:
 *          RunWorkflow("2","{2206A665-9CE7-475C-8B82-B52354078D67}",500,200);
 *
 *Return:
 *          Success:    true
 *          Error:      err.message
 *
 *Notes:
 *          Tested for Microsoft Dynamics CRM 2016
 */




function getCurrentFormID(){
    var result = new Array(2);
    var formItem = Xrm.Page.ui.formSelector.getCurrentItem();
    if (formItem != null){
        result[0] = formItem.getId();
        result[1] = formItem.getLabel();
        console.log(result[0] + " | " + result[1]);
    }else{
        console.log("Unable to get current form");
    }
    return result;
}


/**
 *Syntax:   getCurrentFormID()
 *Parameter:
 *
 *Example:
 *          getCurrentFormID();
 *
 *Return:
 *          Success:    Returns array
 *              [0]     FormID
 *              [1]     FormName
 *          Error:    Returns array
 *              [0]     null
 *              [1]     null
 *
 *Notes:
 *          Tested for Microsoft Dynamics CRM 2016
 */



function changeForm(formid,formName) {
    var currentForm = Xrm.Page.ui.formSelector.getCurrentItem();
    var availableForms = Xrm.Page.ui.formSelector.items.get();

    if (formid != ""){
        var result = Xrm.Page.ui.formSelector.items.get(formid).navigate();
        return true;
    }

    if (currentForm.getLabel().toLowerCase() != formName.toLowerCase()) {
        for (var i in availableForms) {
            var form = availableForms[i];
            if (form.getLabel().toLowerCase() == formName.toLowerCase()) {
                console.log(form.getLabel().toLowerCase()+", match");
                form.navigate();
                return true;
            }
        }
    }
    return false;
}



/**
 *Syntax:   changeForm()
 *Parameter:
 *
 *Example:
 *         if (Xrm.Page.ui.formSelector.getCurrentItem().getId() != "FormID"){
 *              Xrm.Page.data.entity.save();
 *              changeForm("FormID","FormName"); //FormID or Form Name
 *          }
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
