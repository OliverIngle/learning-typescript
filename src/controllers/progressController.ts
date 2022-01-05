import { Request, Response, NextFunction } from 'express';


function getPercent(total: number, completed: number): number {
    return Math.floor(100 * completed / total)
}


function generateBar(percent: number, length: number): string {

    let n : number = 0;
    let proportion = length * percent;
    let bar: string = '';

    for (let i = 0; i <= 100 * length; i += 100) {   
        if (
            i < proportion 
            && proportion < i + 100 
            || i == proportion
        ) {        
            break
        }
        n ++

    }

    for (bar; bar.length != length;) {

        if (bar.length < n) {
            bar += '▓';
        } else {
            bar += '░'
        }

    }
    
    return bar
}


function getBar(req: Request, res: Response) {

    if (!req.query.total || !req.query.completed) {
        return res
            .status(400)
            .send('Required URL  params not found.');
    }

    let total = parseFloat(req.query.total as string);
    let completed = parseFloat(req.query.completed as string);
    let barLength = parseFloat(req.query.length as string) || 10;

    let percent = getPercent(total, completed);
    let bar = generateBar(percent, barLength);

    return res.status(200).json({
        percent: percent,
        progressBar: bar,
    });
}


export default { getBar }