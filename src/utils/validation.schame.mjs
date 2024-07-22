export const createValidationSchema={
    username: {
        isLength: {
            options: {
                min: 4,
                max: 32
            },
            errorMessage: 'Kullanıcı adı en az 5, en fazla 32 karakter olabilir'
        },
        notEmpty: {
            errorMessage: 'Kullanıcı adı boş olamaz'
        },
        isString: {
            errorMessage: 'Kullanıcı adı sadece string olabilir'
        }
    },
    email: {
        isEmail: {
            errorMessage: 'Geçerli bir email adresi girin'
        },
        notEmpty: {
            errorMessage: 'Email boş olamaz'
        }
    },
    password: {
        isLength: {
            options: {
                min: 6
            },
            errorMessage: 'Parola en az 6 karakter olmalı'
        },
        matches: {
            options: /[A-Z]/,
            errorMessage: 'Parola en az bir büyük harf içermeli'
        },
        matches: {
            options: /[a-z]/,
            errorMessage: 'Parola en az bir küçük harf içermeli'
        }
    }
}
export const loginValidationSchema = {
    username: {
        notEmpty: {
            errorMessage: 'Kullanıcı adı boş olamaz'
        },
        isString: {
            errorMessage: 'Kullanıcı adı sadece string olabilir'
        }
    },
    password: {
        notEmpty: {
            errorMessage: 'Parola boş olamaz'
        },
        
    }
};