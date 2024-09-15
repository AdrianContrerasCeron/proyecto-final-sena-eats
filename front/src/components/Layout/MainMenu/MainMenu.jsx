import React from 'react'
import { Drawer, Paper, IconButton, Divider } from '@material-ui/core'
import { useStyles } from '../../../style/style'
import { Menu as MenuIcon } from '@material-ui/icons'
import Logo from '../icon.jpg'

const MainMenu = ({ open, setOpen }) => {
    const classes = useStyles()

    return (
        <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
            <Paper className={classes.paper} elevation={0}>
                <div className={classes.div}>
                    <IconButton edge='start' color='inherit' onClick={() => setOpen(false)}>
                        <MenuIcon />
                    </IconButton>
                    <img src={Logo} alt='...' className={classes.logo} />
                </div>
                <Divider />
            </Paper>
                <nav>
                    <ul class="menu">
                        <li><button id="todos" className="boton-menu boton-categoria active"><i className="bi bi-hand-index-fill"></i>Todos los productos</button></li>
                        <li><button id="01" className="boton-menu boton-categoria"><i className="bi bi-hand-index-thumb"></i>Bebidas</button></li>
                        <li><button id="02" className="boton-menu boton-categoria"><i className="bi bi-hand-index-thumb"></i>Chocolates</button></li>
                        <li><button id="03" className="boton-menu boton-categoria"><i className="bi bi-hand-index-thumb"></i>Confiteria y dulces</button></li>
                        <li><button id="04" className="boton-menu boton-categoria"><i className="bi bi-hand-index-thumb"></i>Dulces típicos</button></li>
                        <li><button id="05" className="boton-menu boton-categoria"><i className="bi bi-hand-index-thumb"></i>Frutos secos</button></li>
                        <li><button id="06" className="boton-menu boton-categoria"><i className="bi bi-hand-index-thumb"></i>Galletas</button></li>
                        <li><button id="07" className="boton-menu boton-categoria"><i className="bi bi-hand-index-thumb"></i>Pasabocas</button></li>
                        <li><a className="boton-menu boton-sugerencia active" href="./sugerencia.html"><i
                        className="bi bi-bag-fill"></i>Sugerir<span id="numerito" className="numerito">0</span></a></li>
                    </ul>
                </nav>
        </Drawer>
        
    )
}

export default MainMenu
