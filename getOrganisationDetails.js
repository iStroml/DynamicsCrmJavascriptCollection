/**
 * Created by stroml on 15.10.16.
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
