// import React, { useState } from "react"
// import useForm from '../../hooks/useForm';
// import { useHistory } from "react-router-dom";
// import logoFutureEats from '../../assets/logo-future-eats.png';
// // import Back from '../../assets/back.png'
// // import saidaIcone from '../../assets/saida.png'
// import { PageContainer, ButtonContainer, Logo, TextStyle, BackButton, Input } from './styled'
// import { Button } from "@material-ui/core";
// import { goToRegisterAdress } from "../../routes/cordinator";
// // import Header from "../../components/Header";
// import useUnprotectedPage from "../../hooks/useUnprotectedPage"
// import CircularProgress from "@material-ui/core/CircularProgress"
// import TextField from '@material-ui/core/TextField'


// const SignUp = () => {

//     const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "", password: "" });

//     useUnprotectedPage()

//     const history = useHistory()

//     const [isLoading, setIsLoading] = useState(false)

//     const changer = (valor) => {

//         if (valor.length <= 14) {
//             valor = valor.replace(/\D/g, '')
//             valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
//             valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
//             valor = valor.replace(/(\d{3})(\d{1,2})/, '$1-$2')
//             valor = valor.replace(/(-\d{2})\d+?$/, '$1')
//         } else if (valor.length > 14) {
//             valor = valor.replace(/\D/g, '')
//             valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
//             valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
//             valor = valor.replace(/(\d{3})(\d{1,2})/, '$1-$2')
//             valor = valor.replace(/(-\d{2})\d+?$/, '$1')
//         }
//         return valor
//     }


//     const onSubmitForm = (event) => {
//         event.preventDefault()
//         signUp(form, clear, history)
//     }



//     const signUp = (form, clear, history) => {
//         setIsLoading(true)
//         api.post(`signUp`, form)
//             .then((res) => {
//                 console.log(res.data)
//                 localStorage.setItem("token", res.data.token)
//                 clear()
//                 goToRegisterAdress(history)
//             })
//             .catch((err) => console.log(err))
//     }


//     return (
//         <PageContainer>
//             <HeaderBack />
//             <Logo src={logoFutureEats} />
//             <TextStyle> Cadastrar </TextStyle>
//             <form onSubmit={onSubmitForm}>
//                 <TextField
//                     placeholder='Name'
//                     name={"name"}
//                     value={form.name}
//                     onChange={onChange}
//                     required
//                     label={"Name"}
//                     variant={"outlined"}
//                     fullWidth
//                     margin={"normal"}
//                 />
//                 <br />
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
//                     type={"text"}
//                     name={"cpf"}
//                     value={form.cpf}
//                     onChange={(event) => onChange(event, changer)}
//                     label="Cpf"
//                     required
//                     variant={"outlined"}
//                     fullWidth
//                     margin={"normal"}
//                 />
//                 <br />

//                 <TextField
//                     placeholder="Minimo 6 characteres"
//                     name={"password"}
//                     value={form.password}
//                     onChange={onChange}
//                     required
//                     label={"Password"}
//                     variant={"outlined"}
//                     margin={"normal"}
//                     type={"Password"}
//                     fullWidth
//                 />

//                 <br />
//                 <br />
//                 <ButtonContainer type={"submit"} onClick={() => goToRegisterAdress(history)}> Create Account </ButtonContainer>
//             </form>
//         </PageContainer>
//     );
// }
// export default SignUp;