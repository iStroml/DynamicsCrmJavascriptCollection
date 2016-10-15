/**
 * Created by stroml on 12.10.16.
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
