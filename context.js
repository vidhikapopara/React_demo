import React, { Component } from "react";
import { rowData } from "./appData";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    AllData: rowData,
    id: "",
    title: "",
    info: "",
    company: "",
    updateEdit: [],
  };

  getRecord = (id) => {
    const product = this.state.AllData.find((item) => item.id === id);
    return product;
  };

  onEdit = (id) => {
    const tempProduct = this.state.AllData;
    const index = tempProduct.indexOf(this.getRecord(id));
    const selectRecord = tempProduct[index];
    this.setState({
      id: selectRecord["id"],
      title: selectRecord["title"],
      info: selectRecord["info"],
      price: selectRecord["price"],
      company: selectRecord["company"],
    });
  };
  updateValue = (e, test) => {
    if (test === "title") {
      this.state.title = e.target.value;
    }
    if (test === "info") {
      this.state.info = e.target.value;
    }
    if (test === "price") {
      this.state.price = e.target.value;
    }
    if (test === "company") {
      this.state.company = e.target.value;
    }
    const tempArr = [
      this.state.id,
      this.state.title,
      this.state.info,
      this.state.price,
      this.state.company,
    ];
    this.setState({
      updateEdit: tempArr,
    });
  };
  onSave = (id) => {
    if (id !== "") {
      const SaveRecord = this.state.AllData;
      const index = SaveRecord.indexOf(this.getRecord(id));
      const Record = SaveRecord[index];
      Record["title"] = this.state.updateEdit[1];
      Record["info"] = this.state.updateEdit[2];
      Record["price"] = this.state.updateEdit[3];
      Record["company"] = this.state.updateEdit[4];
      this.setState({
        AllData: [...this.state.AllData],
        id: "",
        title: "",
        info: "",
        price: "",
        company: " ",
      });
    } else {
      const MaxId = Math.max(...this.state.AllData.map((item) => item.id));
      const id = MaxId + 1;
      const newArr = [];
      newArr["title"] = this.state.updateEdit[1];
      newArr["info"] = this.state.updateEdit[2];
      newArr["price"] = this.state.updateEdit[3];
      newArr["company"] = this.state.updateEdit[4];
      this.setState({
        AllData: [...this.state.AllData, newArr],
        id: "",
        title: "",
        info: "",
        price: "",
        company: " ",
      });
    }
  };

  onDelete = (id) => {
    const tempProduct = this.state.AllData.filter((item) => item.id !== id);
    this.setState({
      AllData: tempProduct,
    });
  };
  render() {
    //console.log(this.state.AllData);
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            onEdit: this.onEdit,
            updateValue: this.updateValue,
            onSave: this.onSave,
            onDelete: this.onDelete,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
