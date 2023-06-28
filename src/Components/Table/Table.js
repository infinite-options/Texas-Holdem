import { getIndexOfRank } from "../../Engine/KeySelection";

export default function Table(props) {
    const table = props.table;
    const t_head = () => {
        return(
            <thead>
                <tr>
                    <th>A</th>
                </tr>
            </thead>
        );
    }
    const block = (key) => {
        const raise = table.get(key);
        return(
            {//raise ? (<td style="background:'red'">key</td>) : <td>key</td>
            }
        );
    };
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};