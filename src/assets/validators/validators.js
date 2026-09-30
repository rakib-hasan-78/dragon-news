

// name validators
export const NameValidators =(name)=>{
     const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
      const numberRegex = /\d/;
     const nameValidation = name.trim();

    //  if name is an empty value
    if (nameValidation=== '') {
        return {
            isValid:false,
            errorMessage: `name can't be empty!`
        }
    }
    // if name is below expected characters
    if (nameValidation.length <= 4) {
        return {
            isValid: false,
            errorMessage:`name must be more than 4 characters!`
        }
    }
    // number checking 
    if (numberRegex.test(nameValidation)) {
        return {
            isValid: false,
            errorMessage:`Name can't contain numbers!`,
        }
    }
    // characters' check
    if (!nameRegex.test(nameValidation)) {
        return{
            isValid : false,
            errorMessage: `Name can only contain letters and spaces!`
        }
    }

    return {
        isValid:true,
        errorMessage: null
    }

}

// email validators 

export const emailValidators = (email) =>{

}
