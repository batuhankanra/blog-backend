export const addBlogValidation ={
    title:{
        isLength: {
            options: {
                max: 32
            },
            errorMessage: 'baslik en fazla 32 karakter olabilir'
        },
        notEmpty: {
            errorMessage: 'baslik boş olamaz'
        },
        isString: {
            errorMessage: 'baslik sadece string olabilir'
        }
    },
    desc:{
        
        notEmpty: {
            errorMessage: ' boş olamaz'
        },
        isString: {
            errorMessage: 'icerik sadece string olabilir'
        }
    }
}