import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import '../SideBar/Sidebar.scss';

const rows = [
    { startTime: "May 26, 5:18 pm", duration: "150 min", maxspeed: "20 kmph", averagespeed: "20 kmph", startingvoltage: "20 V", endvoltage: "20 V", distance: "20 Km", driverscore: 40 },
    { startTime: "May 26, 5:18 pm", duration: "150 min", maxspeed: "20 kmph", averagespeed: "20 kmph", startingvoltage: "20 V", endvoltage: "20 V", distance: "20 Km", driverscore: 40 },
    { startTime: "May 26, 5:18 pm", duration: "150 min", maxspeed: "20 kmph", averagespeed: "20 kmph", startingvoltage: "20 V", endvoltage: "20 V", distance: "20 Km", driverscore: 40 },
    { startTime: "May 26, 5:18 pm", duration: "150 min", maxspeed: "20 kmph", averagespeed: "20 kmph", startingvoltage: "20 V", endvoltage: "20 V", distance: "20 Km", driverscore: 40 },
    { startTime: "May 26, 5:18 pm", duration: "150 min", maxspeed: "20 kmph", averagespeed: "20 kmph", startingvoltage: "20 V", endvoltage: "20 V", distance: "20 Km", driverscore: 40 },
    { startTime: "May 26, 5:18 pm", duration: "150 min", maxspeed: "20 kmph", averagespeed: "20 kmph", startingvoltage: "20 V", endvoltage: "20 V", distance: "20 Km", driverscore: 40 },
    { startTime: "May 26, 5:18 pm", duration: "150 min", maxspeed: "20 kmph", averagespeed: "20 kmph", startingvoltage: "20 V", endvoltage: "20 V", distance: "20 Km", driverscore: 40 },
    { startTime: "May 26, 5:18 pm", duration: "150 min", maxspeed: "20 kmph", averagespeed: "20 kmph", startingvoltage: "20 V", endvoltage: "20 V", distance: "20 Km", driverscore: 40 },
    { startTime: "May 26, 5:18 pm", duration: "150 min", maxspeed: "20 kmph", averagespeed: "20 kmph", startingvoltage: "20 V", endvoltage: "20 V", distance: "20 Km", driverscore: 40 }
];

export default function BasicTable() {
    return (
        <TableContainer className="atblecont" component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Start Time</TableCell>
                        <TableCell align="left">Duration</TableCell>
                        <TableCell align="left">Max Speed</TableCell>
                        <TableCell align="left">Average Speed</TableCell>
                        <TableCell align="left">Starting Voltage</TableCell>
                        <TableCell align="left">Ending Voltage </TableCell>
                        <TableCell align="left">Distance</TableCell>
                        <TableCell align="left">Driver Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.startTime}
                            </TableCell>
                            <TableCell align="left">{row.duration}</TableCell>
                            <TableCell align="left">{row.maxspeed}</TableCell>
                            <TableCell align="left">{row.averagespeed}</TableCell>
                            <TableCell align="left">{row.startingvoltage}</TableCell>
                            <TableCell align="left">{row.endvoltage}</TableCell>
                            <TableCell align="left">{row.distance}</TableCell>
                            <TableCell align="left">{row.driverscore}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
