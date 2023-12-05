import { getMovies } from "../../../lib/mongo/movies";

const Handler = async  (req, res) => {
    if (req.method === 'GET') {
        try{
            const { movies, error } = await getMovies()
            if (error) throw new Error(error)

            return res.status(200).json({ movies })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    res.SetHeader('Allow'. ['GET'])
    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default Handler