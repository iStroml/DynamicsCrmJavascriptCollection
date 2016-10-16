/**
 * Created by stroml on 16.10.16.
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
