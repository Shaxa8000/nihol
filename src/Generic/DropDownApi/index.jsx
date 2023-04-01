import { DropDownContentWrapper } from "../Styles";
import { SettingOutlined, LogoutOutlined, TranslationOutlined } from '@ant-design/icons';

const customIconStyle = {
    fontSize: '17px'
}

export const useDropDown = () => {
    const loginItems = () => [
        {
          label: <DropDownContentWrapper>
                    <SettingOutlined style={customIconStyle} />
                     Settings
                 </DropDownContentWrapper>,
          key: '0',
        },
        {
          label: <DropDownContentWrapper>
                   <TranslationOutlined style={customIconStyle} />
                   Change Language
                 </DropDownContentWrapper>,
          key: '1',
        },
        {
          label: <DropDownContentWrapper style={{color: 'red'}}>
                    <LogoutOutlined style={{...customIconStyle, color: 'red'}} />
                    Log out
                  </DropDownContentWrapper>,
          key: '3',
        },
      ];
      
      return {loginItems};
}




