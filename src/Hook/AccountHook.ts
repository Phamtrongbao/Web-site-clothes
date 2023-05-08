import { UseMutationResult, useMutation, useQuery } from "react-query";
import { account } from "../Service/Account";
import { LoginCustomer, RegisterCustomer} from "../api/AccountType";
import { notification } from 'antd';


//login customer
const LoginCustomers = async (credentials: LoginCustomer): Promise<LoginCustomer> => {
  return account.LoginCustomer(credentials)
    .then(response => {
      console.log(response)
      localStorage.setItem('accessToken', response.data.token); 
      localStorage.setItem('user', JSON.stringify(response.data.UserId));  
      notification.success({
        message: "Success!",
        description: "You have successfully logged in.",
      });
      setTimeout(() => {
        window.location.replace("/home")
      }, 100);
      return response.data as LoginCustomer;
    })
    .catch(error => {
      notification.error({
        message: "Error!",
        description: `Error: ${error.response.data.message}`,
      });
      return Promise.reject(error);
    });
};

export const useLoginCustomer = (): UseMutationResult<LoginCustomer, Error, LoginCustomer, unknown> => {
  return useMutation<LoginCustomer, Error, LoginCustomer>(LoginCustomers);
};


//register customer
const RegisterCustomers = async (credentials: RegisterCustomer): Promise<RegisterCustomer> => {
  return account.RegisterCustomer(credentials)
    .then(response => {
      console.log(response) 
      notification.success({
        message: "Success!",
        description: response.data.message,
      });
      return response.data as RegisterCustomer;
    })
    .catch(error => {
      notification.error({
        message: "Error!",
        description: `Error: ${error.response.data.message}`,
      });
      return Promise.reject(error);
    });
};

export const useRegisterCustomer = (): UseMutationResult<RegisterCustomer, Error, RegisterCustomer, unknown> => {
  return useMutation<RegisterCustomer, Error, RegisterCustomer>(RegisterCustomers);
};


