import { VALUE, createTable, keys, mergeTables } from "../../preset/Preset";
import "./OpponentsProfile.css";
import {Chart} from "react-google-charts";

function getTable (fetchData, player_name, player_type, player_pos) {
    let output_table = createTable();
    if(Object.keys(fetchData).length === 0) {
        return output_table;
    }
    fetchData.forEach(data=> {
        if(data.player_type === player_type && data.position === player_pos) {
            const preflop_table = JSON.parse(data.preflop_table);
            const full_table = mergeTables(preflop_table, output_table); // in case of not complete table
            output_table = full_table;
        }
    })
    return output_table;
}

function getNumOf(table, value) {
    let count = 0;
    const keyset = keys();
    keyset.forEach(key_row=>{
        key_row.forEach(key=>{
            if(table[key] === value) {
                count++;
            }
        });
    });
    return count;
}

export default function Statistics(props) {
    const [player_name, player_type, player_pos] = props.player;
    const fetchData = props.data;
    const table = getTable(fetchData, player_name, player_type, player_pos);
    const count_raise = getNumOf(table, VALUE.RAISE);
    const count_fold = getNumOf(table, VALUE.FOLD);
    
    const data = [
        ["Scenario", "Count"],
        ["No. of Raise", count_raise],
        ["No. of Fold", count_fold],
    ];
    const options = {
        pieHole: 0.5,
        is3D: false,
        backgroundColor: "#F5F5F5",
        colors: ["#D7635F", "#e1e1e1"],
        pieSliceText: "none",
    };
    return(
        <div className="statistics-container">
            <div className="title-text">
                Statistics
            </div>
            <div>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"350px"}
                    height={"200px"}
                />
            </div>
        </div>
    );
}