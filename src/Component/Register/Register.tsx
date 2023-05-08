import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { MailOutlined, LockOutlined, UserOutlined,GlobalOutlined,PhoneOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import { useRegisterCustomer } from '../../Hook/AccountHook';


export default function Register() {
    const schema = yup.object({
        Email: yup.string().email("Email không hợp lệ").required("Email không được để trống"),
        Password: yup.string().required("Password không được để trống"),
        UserName: yup.string().required("UserName không được để trống"),
        Address: yup.string().required("Address không được để trống"),
        PhoneNumber: yup.number().required("PhoneNumber không được để trống")
    }).required();
    type RegisterCustomer= yup.InferType<typeof schema>;
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterCustomer>({
        resolver: yupResolver(schema)
    });
    const Register = useRegisterCustomer()
    const onSubmit = async (data: RegisterCustomer ) => {
      await Register.mutateAsync({ UserName:data.UserName,Email:data.Email,Password:data.Password,Address:data.Address,PhoneNumber:data.PhoneNumber});
    };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='container'>
    <button className='back'>
        <NavLink style={{color:'grey',fontSize:20}} to={"/loginCustomer"}>
        <ArrowLeftOutlined className='mt-1'/>
        </NavLink>
        </button>
        <h2 className='mt-5' style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: 900 }}>REGISTER</h2>
        <div className="account-content ">
        <div className="input-acc">
                <div className="icon-acc">
                <UserOutlined />
                </div>
                <input
                    type="text"
                    placeholder="Type your Name"
                    {...register("UserName", { required: true })}
                    style={{
                        padding: '10px',
                        border: 'none',
                        borderBottom: "solid 1px grey",
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                        outline: 'none',
                        fontSize: '16px',
                        width: '300px',
                    }}
                />
            </div>
            <p style={{ color: 'red',textAlign:'center' }}>{errors.UserName?.message}</p>
            <div className="input-acc">
                <div className="icon-acc">
                    <MailOutlined />
                </div>
                <input
                    type="email"
                    placeholder="Type your email"
                    {...register("Email", { required: true })}
                    style={{
                        padding: '10px',
                        border: 'none',
                        borderBottom: "solid 1px grey",
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                        outline: 'none',
                        fontSize: '16px',
                        width: '300px',
                    }}
                />
            </div>
            <p style={{ color: 'red',textAlign:'center' }}>{errors.Email?.message}</p>
            <div className="input-acc">
                <div className="icon-acc">
                    <LockOutlined />
                </div>
                <div className="lock-acc">
                    <input
                        type="text"
                        placeholder="Type your password"
                        {...register("Password", { required: true })}
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
                </div>
            </div>
            <p style={{ color: 'red',textAlign:'center' }}>{errors.Password?.message}</p>
            <div className="input-acc">
                <div className="icon-acc">
                <GlobalOutlined />
                </div>
                <input
                    type="text"
                    placeholder="Type your Address"
                    {...register("Address", { required: true })}
                    style={{
                        padding: '10px',
                        border: 'none',
                        borderBottom: "solid 1px grey",
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                        outline: 'none',
                        fontSize: '16px',
                        width: '300px',
                    }}
                />
            </div>
            <p style={{ color: 'red',textAlign:'center' }}>{errors.Address?.message}</p>
            <div className="input-acc">
                <div className="icon-acc">
                <PhoneOutlined />
                </div>
                <input
                    type="number"
                    placeholder="Type your PhoneNumber"
                    {...register("PhoneNumber", { required: true })}
                    style={{
                        padding: '10px',
                        border: 'none',
                        borderBottom: "solid 1px grey",
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                        outline: 'none',
                        fontSize: '16px',
                        width: '300px',
                    }}
                />
            </div>
            <p style={{ color: 'red',textAlign:'center' }}>{errors.PhoneNumber?.message}</p>
        </div>
        <button type='submit'  className='account-log'>
           Register
        </button>
     

    </div>

</form>
  )
}
