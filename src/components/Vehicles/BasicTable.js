import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Table.scss';


export default function BasicTable(props) {
    const rows = props?.recent_trips;
    const tableval= (props1 , ssss) => {
        return(
            <span className={ssss}>{props1}</span>
        )
    }
    return (
        <TableContainer className="tableContent" component={Paper}>
            <Table stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{tableval("Start Time","tablehead")}</TableCell>
                        <TableCell align="left">{tableval("Duration","tablehead")}</TableCell>
                        <TableCell align="left">{tableval("Max Speed","tablehead")}</TableCell>
                        <TableCell align="left">{tableval("Average Speed","tablehead")}</TableCell>
                        <TableCell align="left">{tableval("Starting Voltage","tablehead")}</TableCell>
                        <TableCell align="left">{tableval("Ending Voltage","tablehead")}</TableCell>
                        <TableCell align="left">{tableval("Distance","tablehead")}</TableCell>
                        <TableCell align="left">{tableval("Driver Score","tablehead")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row,idx) => (
                        <TableRow
                            key={idx}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {tableval(row.startTime,"tablebody")}
                            </TableCell>
                            <TableCell align="left">{tableval(row.duration,"tablebody")}</TableCell>
                            <TableCell align="left">{tableval(row.maxspeed,"tablebody")}</TableCell>
                            <TableCell align="left">{tableval(row.averagespeed,"tablebody")}</TableCell>
                            <TableCell align="left">{tableval(row.startingvoltage,"tablebody")}</TableCell>
                            <TableCell align="left">{tableval(row.endvoltage,"tablebody")}</TableCell>
                            <TableCell align="left">{tableval(row.distance,"tablebody")}</TableCell>
                            <TableCell align="left">{tableval(row.driverscore,"tablebody")}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
