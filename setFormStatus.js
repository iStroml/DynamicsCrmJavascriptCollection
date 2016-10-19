/**
 * Created by stroml on 19.10.16.
 */


function setFormStatus(status)
{
    try {
        var allAttributes = Xrm.Page.data.entity.attributes.get();
        for (var i in allAttributes) {
            var currentattribte = Xrm.Page.data.entity.attributes.get(allAttributes[i].getName());
            var attributename = currentattribte.getName();
            Xrm.Page.getControl(attributename).setDisabled(status);
        }
        return true;
    }catch (err){
        console.log(err.message);
        return false;
    }
}


/**
 * Disables alll forms
 *
 *Syntax:   setFormStatus(status)
 *Parameter:
 *          status = Boolean
 *
 *Example:
 *          setFormStatus(true);
 *
 *Return:
 *          Success:    Returns true
 *          Error:    Returns false
 *
 *Notes:
 *          Tested for Microsoft Dynamics CRM 2016
 */
