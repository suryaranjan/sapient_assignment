import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import dropdownMenu from '../../constants/dropdown';
import ROUTES from '../../constants/routes';
import './mobileDropdown.scss'; 

const MobileDropdown = ({getCategoryProductList}) => {
    const [selectedValue, setSelectedValue] = useState(dropdownMenu[1]);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSelectChange = (option) => {
        if(option.categoryId){
            getCategoryProductList(option.categoryId);
        }
        setSelectedValue(option);
        navigate(option.value);
    }

    useEffect(() => {
        if(location.pathname == ROUTES.HOME){
            setSelectedValue(dropdownMenu[0])
        }else if(location.pathname == ROUTES.PRODUCT && !selectedValue){
            setSelectedValue(dropdownMenu[1])
        }
    }, [location])

    return (
        <Select
          className="basic-single customDropdown"
          classNamePrefix="select"
          isClearable={false}
          isSearchable={false}
          name="dropdownMenu"
          onChange={handleSelectChange}
          value={selectedValue}
        //   menuIsOpen={true}
          options={dropdownMenu}
        />
    )
}

export default MobileDropdown;