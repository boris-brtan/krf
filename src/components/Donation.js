import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Paper, useTheme, Typography, Card, CardActionArea } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { user_donationResultParam } from '../actions'
import { Chart } from 'react-google-charts'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: '0 10px',
        },
        grid: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.up('xl')]: {
                maxWidth: '70%',
                margin: 'auto',
            },
        },
        paper: {
            marginBottom: 2,
            width: '100%',
            textAlign: 'center',
            padding: '15px 2px',
        },
        card: {
            flex: 1,
            minWidth: 120,
            alignSelf: 'stretch',
            margin: 2,
            textAlign: 'center',
        },
        selectedCard: {
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        },
        cardArea: {
            padding: '10px 0',
            height: '100%',
        },
    }),
)

const BarChart = (props) => {
    const theme = useTheme()

    return <Chart
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['Odber', 'Hodnota', { role: 'annotation' }],
            ...props.data.map(odber => [
                odber.Datum.replace(/(\d+)-(\d+)-(\d+).+/, '$3.$2.$1'),
                odber.Hodnota,
                odber.Hodnota,
            ]),
        ]}
        options={{
            animation: {
                startup: true,
                duration: 200,
            },
            annotations:{
                textStyle: {
                    fontSize: 12,
                },
            },
            backgroundColor: theme.palette.background.default,
            chartArea: {
                width: '100%',
                left: 40,
                top: 40,
            },
            colors: [theme.palette.primary.main],
            hAxis: {
                title: 'Dátum odberu',
                gridlines: {
                    count: 20,
                    color: '#fff',
                },
                baselineColor: theme.palette.text.primary,
                textColor: theme.palette.text.primary,
                titleTextStyle: {
                    color: theme.palette.text.primary,
                }
            },
            vAxis: {
                title: 'Hodnota zložky krvi',
                minValue: 0,
                textColor: theme.palette.text.primary,
                baselineColor: theme.palette.text.primary,
                titleTextStyle: {
                    color: theme.palette.text.primary,
                },
            },
            legend: {
                position: 'none',
            },
            height: 250,
            width: '100%',
            title: props.title,
            titleTextStyle: {
                color: theme.palette.text.primary,
                fontSize: 15,
            },
        }}
        rootProps={{ 'data-testid': '2' }}
    />
}

export default function Donation(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const token = useSelector((state) => state.authReducer.token)
    const donation = useSelector((state) => state.donationReducer.info)
    const result = useSelector((state) => state.donationReducer.result)
    const donationResultParam = useSelector((state) => state.donationReducer.param)
    const settingsParams = useSelector((state) => state.settingsReducer.params.slice(0, -1))
    const donationId = props.match.params.id

    const loadDonationResultParam = (param) => {
        setSelectedParam(param)
        dispatch(user_donationResultParam(token, donationId, param.Id))
    }

    const [selectedParam, setSelectedParam] = useState(null)

    return (
        <div className={classes.root}>
            <BarChart title={selectedParam && `${selectedParam.Nazov} [ ${selectedParam.MernaJednotka} ]`} data={donationResultParam} />
            <div className={classes.grid}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">
                        {new Date(donation.Zaciatok).toLocaleDateString() + ' ' +
                            new Date(donation.Zaciatok).toLocaleTimeString() + ' - ' +
                            new Date(donation.Koniec).toLocaleTimeString()}
                    </Typography>
                </Paper>
                {settingsParams.map((settingsParam, idx) => (
                    <Card
                        className={clsx(classes.card, selectedParam && selectedParam.Id === settingsParam.Id && classes.selectedCard)}
                        key={settingsParam.Id}
                        onClick={() => loadDonationResultParam(settingsParam)}
                    >
                        <CardActionArea className={classes.cardArea}>
                            <Typography variant="body2">
                                {settingsParam.Nazov}
                            </Typography>
                            <Typography variant="body1" noWrap>
                                {result[idx] ? result[idx].Hodnota : 0} {settingsParam.MernaJednotka}
                            </Typography>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </div>
    )
}

BarChart.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
}
Donation.propTypes = {
    match: PropTypes.any,
}
