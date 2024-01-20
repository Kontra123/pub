import { useState } from 'react'
import Dropdown from '../../components/forms/select/select'
import './home.scss'
import { registeredUsers, currentStatus } from '../../constants/mockdata'
import EmployeeStatus from '../../components/employess/employeeStatus/employeeStatus'


const Home = () => {


    return (
        <div className="home-main-wrapper">
            <p className='current-status-title'>Hello amir, you are on vacation</p>
            <p className='update-status-title'>Update my current Status:</p>
            <div className="update-status-dropdown">
                <Dropdown data={currentStatus} />
            </div>
            <hr class="separator" />
            <p className='update-status-title'>List of employess:</p>
            <div className='employee-status'>
                <EmployeeStatus/>
            </div>
        </div>
    )
}

export default Home