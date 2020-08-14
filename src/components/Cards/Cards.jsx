import React from 'react'
import { Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'


function Cards({data: { confirmed, recovered, deaths, lastUpdate}}) {
    if (!confirmed) {
        return 'Loading'
    }
    const speed = {con: 4, rec: (2.5/confirmed.value*recovered.value), dea: (2.5/confirmed.value*recovered.value)}
    const date = new Date(lastUpdate).toDateString();
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant='h6'>
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={speed.con}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{date}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h6'>
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={speed.rec}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{date}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h6'>
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={speed.dea}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{date}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
