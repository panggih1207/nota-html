



const app = express()

app.use(cors());
app.use(express.json)

// Untuk menyimpan Data NOta

app.post("/nota" , (req,res)=> {
    const {nama, qty, harga, jumlah } = req.body

        db.run(
            "INSERT INTO nota (nama,qty,harga,jumlah) VALUES (?,?,?,?)",
            [nama, qty,harga,jumlah],

            function(err){
                return res.status(500).json(err)
            },

            
            res.json({ message:"Nota tersimpan" ,
                id:this.lastID

            })



        )
}) 

