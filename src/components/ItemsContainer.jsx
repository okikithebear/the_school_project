import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { CONTACTS,QUICKLINKS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="flex flex-row justify-between md:justify-center md:space-x-24 md:space-y-0 p-8">
      <FontAwesomeIcon icon={faLongArrowAltRight}  />
      <Item Links={CONTACTS} title="CONTACTS" />
      
      <Item Links={QUICKLINKS} title="QUICKLINKS" />
    </div>
  );
};

export default ItemsContainer;