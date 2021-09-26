import React from 'react';
import { Select } from 'antd';
// import { Dropdown } from 'primereact/dropdown';

export const CategoryDropdown = () => {
    const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
 return(
     <Select
    showSearch
    style={{ width: 368, marginBottom: 10 }}
    placeholder="Choose a Category"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Supermarkets">Supermarkets</Option>
    <Option value="Restaurants">Restaurants</Option>
    <Option value="Drinks">Drinks</Option>
    <Option value="Pharmacy">Pharmacy</Option>
  </Select>
 )
}

export const SubCatDropdown = () => {
     const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  return(
    <Select
   showSearch
   style={{ width: 368,  marginBottom: 10  }}
   placeholder="Choose Sub-category1"
   optionFilterProp="children"
   onChange={onChange}
   onFocus={onFocus}
   onBlur={onBlur}
   onSearch={onSearch}
   filterOption={(input, option) =>
     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
   }
 >
   <Option value="Food Cupboard">Food Cupboard</Option>
   <Option value="House Cleaning">House Cleaning</Option>
 </Select>
)
   }
   

   export const SubCateDropdown = () => {
   const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  return(
    <Select
   showSearch
   style={{ width: 368, marginBottom: 10 }}
   placeholder="Choose Sub-Category2"
   optionFilterProp="children"
   onChange={onChange}
   onFocus={onFocus}
   onBlur={onBlur}
   onSearch={onSearch}
   filterOption={(input, option) =>
     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
   }
 >
   <Option value="Grains">Grains</Option>
   <Option value="Pasta">Pasta</Option>
   <Option value="Noodles">Noodles</Option>
   <Option value="Breakfast Food">Breakfast food</Option>
   <Option value="Flour">Flour</Option>
 </Select>
)
   }

   export const Measurement = () => {
//     const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  return(
    <Select
   showSearch
   style={{ width: 90 }}
   placeholder="Liter"
   optionFilterProp="children"
   onChange={onChange}
   onFocus={onFocus}
   onBlur={onBlur}
   onSearch={onSearch}
   filterOption={(input, option) =>
     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
   }
 >
   <Option value="Liter">Liter</Option>
   <Option value="Centiliter">Centiliter</Option>
   <Option value="Millimeter">Millimeter</Option>
 </Select>
)  
   }