import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
// import fetch from 'cross-fetch';

const SuggestionField = (props) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([
    {
      HAISOSAKI_ID: '007145100809',
      HAISO_NAME: '031648100ニチユＭＨＩ中部㈱金沢支店（北日本運輸）',
      JIGYOSHO_KBN: 'P',
    },
    { HAISOSAKI_ID: '031648100000', HAISO_NAME: '北日本運輸', JIGYOSHO_KBN: 'P' },
  ]);
  const loading = open && options.length === 0;

  const searchOptions = async (e) => {
    if (!e.target.value) {
      return false;
    }

    // const baseURL = 'http://192.168.1.212/WebApi/EpalKyotenRegWebApi/api/GetHaisoList';
    // const query = '?haiso_kana=' + encodeURIComponent(e.target.value);
    // const response = await fetch(baseURL + query);
    // const { LIST } = await response.json();
    // if (LIST && LIST.length > 0) {
    //   setOptions(LIST);
    // }
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 350, marginRight: 16 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.HAISOSAKI_ID === value.HAISOSAKI_ID}
      getOptionLabel={(option) => option.HAISOSAKI_ID + ' ' + option.HAISO_NAME}
      options={options}
      loading={loading}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            size="small"
            label="請求先検索"
            variant="standard"
            InputProps={{
              ...params.InputProps,
              // style: { fontSize: 13 },
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
            InputLabelProps={{ shrink: true }}
            onChange={searchOptions}
          />
        );
      }}
    />
  );
};

export default SuggestionField;
