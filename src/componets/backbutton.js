/** @jsx jsx */
import { jsx } from 'theme-ui'
import Button from './buttonLink'
import {FiArrowLeft} from 'react-icons/fi'

export default ({to}) => <Button to={to}>
    <FiArrowLeft/> Back to {to} page 
</Button>