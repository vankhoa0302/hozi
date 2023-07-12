import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Background from '@components/Background/index'
import CustomHeader from '@components/CustomHeader.js/index'
import { Theme } from '@common/theme'
import CustomText from '@components/CustomText/CustomText'
import { useDispatch } from 'react-redux'
import { fetchChangeUserInfo } from './profileSilce'
import { alert } from '@baronha/ting'
import { passwordValidator } from '@screens/auth/authValidator'
const ChangePassword = () => {
    const [oldPwd, setOldPwd] = useState({ value: '', error: '' });
    const [newPwd, setNewPwd] = useState({ value: '', error: '' });
    const [confirmPwd, setConfirmPwd] = useState({ value: '', error: '' });


    const dispatch = useDispatch()


    const changePassword = async () => {

        //validate
        const oldPwdError = passwordValidator(oldPwd.value);
        const newPwdError = passwordValidator(newPwd.value);
        const comfirmPwdError = passwordValidator(confirmPwd.value);
        if (oldPwdError || newPwdError || comfirmPwdError) {
            setOldPwd({ ...oldPwd, error: oldPwdError });
            setNewPwd({ ...newPwd, error: newPwdError });
            setConfirmPwd({ ...confirmPwd, error: comfirmPwdError });
            return;
        } else if (confirmPwd.value != newPwd.value) {
            setPwdConfirm({ ...confirmPwd, error: 'Xác nhận mật khẩu chưa chính xác !' });
            return;
        }

        let obj = {
            old_pass: oldPwd.value,
            new_pass: newPwd.value,
        }
        const actions = await dispatch(fetchChangeUserInfo(obj))
        if (actions?.error) {
            const options = {
                title: 'Mật khẩu cũ chưa chính xác !',
                preset: 'error'
            };
            alert(options);
        }
        if (actions?.payload) {
            const options = {
                title: 'Đổi mật khẩu thành công !',
            };
            alert(options);
        }
    }
    return (
        <Background>
            <CustomHeader isBack={true} headerName={'Đổi mật khẩu'} />
            <View style={styles.container}>
                <TextInput
                    onChangeText={text => setOldPwd({ value: text, error: '' })}
                    style={styles.textInput}
                    placeholder='Nhập mật khẩu hiện tại'
                />
                {oldPwd.error && <Text style={styles.error}>{oldPwd.error}</Text>}

                <TextInput
                    onChangeText={text => setNewPwd({ value: text, error: '' })}
                    style={styles.textInput}
                    placeholder='Nhập mật khẩu mới'
                />
                {newPwd.error && <Text style={styles.error}>{newPwd.error}</Text>}

                <TextInput
                    onChangeText={text => setConfirmPwd({ value: text, error: '' })}
                    style={styles.textInput}
                    placeholder='Xác nhận mật khẩu'
                />
                {confirmPwd.error && <Text style={styles.error}>{confirmPwd.error}</Text>}

                <TouchableOpacity style={styles.btn} onPress={changePassword}>
                    <CustomText fontSize={16} color={'#fff'}>Xác nhận</CustomText>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    textInput: {
        marginTop: 12,
        width: '100%',
        padding: 12,
        borderRadius: 8,
        borderColor: Theme.COLORS.grey,
        borderWidth: 1
    },
    btn: {
        alignItems: 'center',
        marginTop: 12,
        width: '50%',
        padding: 12,
        borderRadius: 8,
        backgroundColor: Theme.COLORS.color2,
    },
    error: {
        color: Theme.COLORS.danger,
        paddingTop: 4,
        fontSize: 14,
    },
})