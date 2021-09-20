export class ValidationService 
{
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) 
    {
      let config :any = {
        'required': 'Required',
        'invalidName':'Invalid Name',
        'invalidEmailAddress': 'Invalid email address',
        'invalidPhone': 'Invalid Phone Number',
        'invalidCity':'Invalid City',
        'invalidZip': 'Invalid Zip Number',
        'minlength': `Minimum length ${validatorValue.requiredLength}`
      };
  
      return config[validatorName];
    }
    static nameValidator(control:any)
    {
      if(control.value.match( /^[a-zA-Z ]{2,30}$/))
      {
        return null;
      }
      else
      {
        return { 'invalidName': true };
      }
    }
  
    static emailValidator(control:any) 
    {
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) 
      {
        return null;
      } 
      else 
      {
        return { 'invalidEmailAddress': true };
      }
    }

    static phoneValidator(control:any)
    {
      if(control.value.match( /^[0-9]{10}$/))
      {
        return null;
      }
      else
      {
        return { 'invalidPhone': true };
      }
    }

    static cityValidator(control:any)
    {
      if(control.value.match( /^[a-zA-Z ]/))
      {
        return null;
      }
      else
      {
        return { 'invalidCity': true };
      }
    }

    static zipValidator(control:any)
    {
      if(control.value.match( /^[0-9]{6}$/))
      {
        return null;
      }
      else
      {
        return { 'invalidZip': true };
      }
    }

}