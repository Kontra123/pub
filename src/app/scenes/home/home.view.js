import { useState } from 'react'
import Dropdown from '../../components/forms/select/select'
import './home.scss'
import { registeredUsers, currentStatus } from '../../constants/mockdata'
import EmployeeStatus from '../../components/employess/employeeStatus/employeeStatus'
// import EmployeeStatus

const Home = () => {

    // const [inputValues, setInputValues] = useState({
    //     searchByName: ''
    // });

    // const handleInputChange = e => {
    //     const { name, value } = e.target
    //     setInputValues(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // };

    return (
        <div className="main-wrapper">
            <p className='current-status-title'>Hello amir, you are on vacation</p>
            <p className='update-status-title'>Update my current Status:</p>
            <div className="update-status-dropdown">
                <Dropdown data={currentStatus} />
            </div>
            <hr class="separator" />
            <p className='update-status-title'>List of employess:</p>
            {/* <div className="list-of-employess">
                <input
                    type="text"
                    name="SearchByName"
                    value={inputValues.userName}
                    onChange={handleInputChange}
                    placeholder="Search by name"
                />
                <div className="list-of-employess-dropdown">
                    <Dropdown data={currentStatus} defaultValue={'Filter by status'} />
                </div>
            </div> */}
            <div className='employee-status'>
                <EmployeeStatus/>
            </div>
        </div>
    )
}

export default Home