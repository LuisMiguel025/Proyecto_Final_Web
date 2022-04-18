import React from "react";
import { ReactComponent as FoodIcon } from "./../images/cat_comida.svg";
import { ReactComponent as ShoppingIcon } from "./../images/cat_compras.svg";
import { ReactComponent as PaymentsIcon } from "./../images/cat_cuentas-y-pagos.svg";
import { ReactComponent as FunIcon } from "./../images/cat_diversion.svg";
import { ReactComponent as HomeIcon } from "./../images/cat_hogar.svg";
import { ReactComponent as ClothesIcon } from "./../images/cat_ropa.svg";
import { ReactComponent as HealthIcon } from "./../images/cat_salud-e-higiene.svg";
import { ReactComponent as TraspIcon } from "./../images/cat_transporte.svg";

const IconCategory = ({ iconName }) => {
  switch (iconName) {
    case "food":
      return <FoodIcon />;

    case "accounts and payments":
      return <PaymentsIcon />;

    case "home":
      return <HomeIcon />;

    case "transport":
      return <TraspIcon />;

    case "clothes":
      return <ClothesIcon />;

    case "health and hygiene":
      return <HealthIcon />;

    case "shopping":
      return <ShoppingIcon />;

    case "fun":
      return <FunIcon />;

    default:
      break;
  }
};

export default IconCategory;
