import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from './fondo.jpg'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import axios from 'axios'
import { useHistory } from 'react-router'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container: {
        height: '60%',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    div: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#39A900"
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(3, 0, 2)
    },
    textField: {
        '& label.Mui-focused': {
            color: '#39A900' // Color personalizado del label cuando está enfocado
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#39A900' // Color del borde cuando el campo está enfocado
        }
    }
}))

const Login = () => {
    const [body, setBody] = useState({ username: '', password: '' })
    const { push } = useHistory()
    const classes = useStyles()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = () => {
        axios.post('http://localhost:4000/api/login', body)
            .then(({ data }) => {
                localStorage.setItem('auth', '"yes"')
                push('/app')
            })
            .catch(({ response }) => {
                console.log(response.data)
            })
    }

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>Sign In</Typography>
                    <form className={classes.form}>
                        <TextField
                            fullWidth
                            autoFocus
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Username'
                            value={body.username}
                            onChange={inputChange}
                            name='username'
                            className={classes.textField} // Aplica el nuevo estilo aquí
                        />
                        <TextField
                            fullWidth
                            type='password'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Password'
                            value={body.password}
                            onChange={inputChange}
                            name='password'
                            className={classes.textField} // Aplica el nuevo estilo aquí
                        />
                        <Button
                            fullWidth
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            style={{ backgroundColor: '#39A900', color: '#fff' }} // Aquí defines el color de fondo y el texto
                            onClick={onSubmit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
        </Grid>
    )
}

export default Login
