import { useState, useEffect } from 'react'
import { registeredUsers, currentStatus, noSelectedOption } from '../../../constants/mockdata'
import Dropdown from '../../forms/select/select'
import './employeeStatus.scss'

const EmployeeStatus = () => {


    const [inputValues, setInputValues] = useState({
        searchByName: ''
    });
    const [selectedStatus, setSelectedStatus] = useState(noSelectedOption)
    const [filterEmployessList, setFilterEmployessList] = useState([])


    const handleInputChange = e => {
        const { name, value } = e.target
        setInputValues(prev => ({
            ...prev,
            [name]: value
        }))
    };

    useEffect(() => {

        let filteredList = registeredUsers;

        if (inputValues.searchByName) {
            filteredList = filteredList.filter(item => item.userName.toLowerCase().includes(inputValues.searchByName.toLowerCase()));
        }

        if (selectedStatus?.id !== -1) {
            filteredList = filteredList.filter(item => item.statusId === selectedStatus.id);
        }
    
        setFilterEmployessList(filteredList)

    },[inputValues.searchByName, selectedStatus])


    const EmployeeStatusItem = ({ userName, statusId }) => {
        const status = currentStatus.find(item => item.id === statusId);
        return (
            <div className='employee-status-item'>
                <label className='user'>{userName}</label>
                <label className='status'>({status.value.toLowerCase()})</label>
            </div>
        );
    };

    return (
        <div className='employee-status-wrapper'>
            <div className="list-of-employess-filter">
                <input
                    type="text"
                    name="searchByName"
                    value={inputValues.searchByName}
                    onChange={handleInputChange}
                    placeholder="Search by name"
                />
                <div className="list-of-employess-dropdown">
                    <Dropdown data={currentStatus} defaultValue={'Filter by status'}
                        onSelect={(value) => setSelectedStatus(value)} />
                </div>
            </div>
            <div className='employee-status-list'>
                {filterEmployessList.map((item, index) => (
                    <EmployeeStatusItem key={index} userName={item.userName} statusId={item.statusId}/>
                ))}
            </div>
        </div>
    )

}


export default EmployeeStatus