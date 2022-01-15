// import React, { useState } from "react"
// import useForm from '../../hooks/useForm';
// import { useHistory } from "react-router-dom";
// import logoFutureEats from '../../assets/logo-future-eats.png';
// import { PageContainer, ButtonContainer, Logo, TextStyle, Button } from './styles'
// import { TextField } from "@material-ui/core";
// import api from '../../api/request';
// import { goToSignUp, goToHome } from "../../routes/cordinator";
// import useUnprotected from "../../hooks/useUnprotected";
// import CircularProgress from "@material-ui/core/CircularProgress"

// const Login = () => {
//     useUnprotected()
//     const [form, onChange, clear] = useForm({ email: "", password: "" });
//     const [isLoading, setIsLoading] = useState(false)

//     const history = useHistory()

//     const onSubmitForm = (event) => {
//         event.preventDefault()
//         login(form, clear, history)
//     }

//     const login = (form, clear, history) => {
//         setIsLoading(true)
//         api.post(`login`, form)
//             .then((res) => {
//                 setIsLoading(false)
//                 localStorage.setItem("token", res.data.token)
//                 clear()
//                 goToHome(history)

//             })
//             .catch((err) => console.log(err))
//     }

//     return (
//         <PageContainer>
//             <Logo src={logoFutureEats} />
//             <TextStyle> Entrar </TextStyle>
//             <form onSubmit={onSubmitForm}>
//                 <TextField
//                     placeholder='email@email.com'
//                     name={"email"}
//                     value={form.email}
//                     onChange={onChange}
//                     required
//                     label={"E-mail"}
//                     variant={"outlined"}
//                     fullWidth
//                     margin={"normal"}
//                 />
//                 <br />
//                 <TextField
//                     placeholder="Mínimo 8 caracteres"
//                     name={"password"}
//                     value={form.password}
//                     onChange={onChange}
//                     required
//                     label={"Senha"}
//                     variant={"outlined"}
//                     margin={"normal"}
//                     type={"Password"}
//                     fullWidth
//                 />
//                 <br />
//                 <br />

//                 <ButtonContainer type={"submit"}> {isLoading ? <CircularProgress color={'inherit'} size={24} /> : <>Entrar</>} </ButtonContainer>

//             </form>
//             <Button
//                 type={"submit"}
//                 fullWidth
//                 variant={"text"}
//                 onClick={() => goToSignUp(history)}
//             >
//                 Ainda não tem cadastro? Clique aqui.
//             </Button>
//         </PageContainer>
//     );
// }

// export default Login;