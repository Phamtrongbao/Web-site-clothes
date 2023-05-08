import React, { useState } from 'react'
import { MailOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useLoginCustomer } from '../../Hook/AccountHook';


export default function Login() {
    //hiện thị ẩn mk
    const [eye, setEye] = useState(false);


    //xử lý validation và form
    const schema = yup.object({
        Email: yup.string().email("Email không hợp lệ").required("Email không được để trống"),
        Password: yup.string().required("Password không được để Trống"),
    }).required();
    type LoginCustomer = yup.InferType<typeof schema>;

    const { register, handleSubmit, formState: { errors } } = useForm<LoginCustomer>({
        resolver: yupResolver(schema)
    });

    //xử lý handle login
    const login = useLoginCustomer()
    const onSubmit = async (data: LoginCustomer) => {
        await login.mutateAsync({ Email: data.Email, Password: data.Password });
    };

    //hiện thị ẩn mk btn
    const handlePasswordChange = (event: any) => {
        const password = event.target.value;
        if (password.length > 0) {
            setEye(true);
        } else {
            setEye(false);
        }
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='container'>
                <button className='back'>
                    <NavLink style={{ color: 'grey', fontSize: 20 }} to={"/"}>
                        <ArrowLeftOutlined className='mt-1' />
                    </NavLink>
                </button>
                <h2 className='mt-5' style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: 900 }}>LOG IN</h2>
                <div className="account-content ">
                    <div className="input-acc">
                        <div className="icon-acc">
                            <MailOutlined />
                        </div>
                        <input type="email"
                            placeholder="Type your email"
                            {...register("Email", { required: true })}
                            style={{
                                padding: '10px',
                                border: 'none',
                                borderBottom: "solid 1px grey",
                                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                                outline: 'none',
                        fontSize: '16px', width: '300px'}}/>
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{errors.Email?.message}</p>
                    
                    <div className="input-acc">
                        <div className="icon-acc">
                            <LockOutlined />
                        </div>
                        <div className="lock-acc">
                            <input
                                type={eye ? "text" : "password"}
                                placeholder="Type your password"
                                {...register("Password", { required: true })}
                                onChange={handlePasswordChange}
                                style={{
                                    padding: '10px',
                                    border: 'none',
                                    borderBottom: "solid 1px grey",
                                    // boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                                    outline: 'none',
                                    fontSize: '16px',
                                    width: '300px',
                                }}
                            />
                            <div className="eye-icon">
                                <button type='button' className='eye-btn' onClick={() => setEye(!eye)}>
                                    {eye ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </button>

                            </div>
                        </div>
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{errors.Password?.message}</p>
                
                    <div className="forgot-password">
                        <NavLink style={{ color: 'grey' }} to={''}>forgot password?</NavLink>
                    </div>
                </div>
                <button type='submit' className='account-log'>
                    login
                </button>
                <div className="btn-up">
                    <NavLink style={{ color: 'grey' }} to={'/Register'}>
                        Or SignUp
                    </NavLink>
                </div>

            </div>

        </form>
    )
}

