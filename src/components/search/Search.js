import React, { Component } from 'react'
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import ImageResults from "../image-results/ImageResults";
import {GetPixabayImages} from "../services/Services";
class Search extends Component {
    state={
        search: "",
        amount: 15,
        images:[]
    }

    onTextChange = (e) => {
        const val = e.target.value
        this.setState({[e.target.name] : val}, () => {
            if(val === ""){
                this.setState({images:[]});
            }else{
                GetPixabayImages(this.state.searchText, this.state.amount).then((response) => {
                    this.setState({images : response.data.hits})
                }).catch(err => console.log(err));
            }
        });
    }

    onAmountChange = (e, index, value) => {
        this.setState({amount : value})
    }
    render() {
        console.log(this.state.images)
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search For Images"
                    fullWidth={true}
                />
                <br/>
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50" />
                </SelectField>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />): null}
            </div>
        )
    }
}

export default Search;