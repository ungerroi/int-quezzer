import {Link, Outlet} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Context} from '../contexts/Context'
import {useContext} from 'react'

const Adm = () => {
    // const value = useContext(Context);
    return (
        <div>
            <nav>
                <Stack spacing={1} direction="row">
                    <Link to="cnd"><Button size="small" variant="outlined">Candidates</Button></Link>
                    <Link to="exm"><Button size="small" variant="outlined">Exams</Button></Link>
                    <Link to="rps"><Button size="small" variant="outlined">Repositories</Button></Link>
                </Stack>
            </nav>
            {/* {JSON.stringify(value)} */}
            <Outlet />
        </div>
    )
}

export default Adm
