import { FormControl, InputLabel, NativeSelect } from '@mui/material';

function MUISelect() {
    return (
        <div className='w-56'>

            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Category
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'Category',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={"Fantasy"}>Fantasy</option>
                    <option value={"Comedy"}>Comedy</option>
                    <option value={"Drama"}>Drama</option>

                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default MUISelect;