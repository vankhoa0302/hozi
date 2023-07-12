export const emailValidator = email => {
    const re = /\S+@\S+\.\S+/;
    if (!email || email.length <= 0) return 'Vui lòng nhập email!';
    if (!re.test(email)) return 'Vui lòng nhập đúng định dạng email!';
    return '';
};
export const emailValidatorLogin = email => {
    if (!email || email.length <= 0) return 'Vui lòng nhập tên đăng nhập của bạn!';
    return '';
};
export const infoValidator = info => {
    if (!info || info.length <= 0) return 'Vui lòng nhập email của bạn!';
    return '';
};

export const passwordValidator = password => {
    if (!password || password.length <= 0) return 'Vui lòng nhập mật khẩu!';
    if (password.length <= 5) return 'Mật khẩu cần có tối thiểu 6 kí tự';
    return '';
};

export const nameValidator = name => {
    if (!name || name.length <= 0) return 'Vui lòng nhập tên!';

    return '';
};
export const surNameValidator = surName => {
    if (!surName || surName.length <= 0) return 'Vui lòng nhập họ!';

    return '';
};

export const phoneValidator = phone => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!phone || phone.length <= 0) return 'Vui lòng nhập số điện thoại!';
    if (!regex.test(phone)) return 'Số điện thoại không hợp lệ!';

    return '';
};

export const cityValidator = city => {
    if (!city || city.length <= 0) return 'Vui lòng chọn thành phố!';
    return '';
};

export const genderValidator = gender => {
    if (!gender || gender.length <= 0) return 'Vui lòng chọn giới tính!';
    return '';
};

