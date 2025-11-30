document.addEventListener("DOMContentLoaded", function() {

    // --- YOUR BLOG POSTS GO HERE ---
    const posts = [
        {
            id: 1,
            title: "Uge 34 - Opstart",
            body: `
                <p>Denne uge blev primært brugt på at opsætte porteføljen, finde et template at arbejde ud fra.
                Fik også gennemgået tutorials og andet vedrørende unity, så jeg er bedre forberedt til starten af spiludviklingen. Planen er at jeg starter med at fokusere på spiludviklingsdelen, inden jeg skifter til at fokusere på mit andet guild.
                </p>
                <img src="./blogimages/BlogPicture_Week34_1.png" alt="Image of unity">
                <p>Unity ser ud til at have en relativ svær learning curve i starten.</p>
            `
        },
        {
            id: 2,
            title: "Uge 36 - Unity",
            body: `
                <p>Uge 35 og 36 er blevet brugt på at få sat dettte blog indlægssystem op at køre. Planen er også at sætte mig ind i hvordan jeg kan overføre unity til en mobil app.</p>
                <p>Jeg fik brugt den forrige uge på at opsætte 
                Vi brugte meget tid på at researche unity og hvilke tutorials der kunne være relevant til projektet. Der er mange små tricks til unity som kan gavne vores process stort. Har aftalt med min gruppe at jeg kommer til at stå for de maps som man kommer til at spille på.
                Så i relation til det har jeg undersøgt hvordan tilemaps virker. 
                </p>
            `
        },
        {
            id: 3,
            title: "Uge 38 - Første bane",
            body: `
                <p>Jeg fik lavet et simpelt map til playtesting, så vi har noget at arbejde ud fra. Vi endte med at bruge nogle assets fra unity asset store som er gratis. 
                Tilemaps er mega nemme at bruge når man først forstår hvordan det virker med at importere PNG filer og splice dem. Meget af arbejdet er i opsætningen af tilemaps, men efter opsætningen så er det praktisk talt ligesom at male i Paint. 
                Nedenfor kan man se vores tile palette og lidt af testbanen til venstre.</p>
                <img src="./blogimages/BlogPicture_Week38_1.png" alt="Image of tileset">
                <p>Er lige så stille begyndt at undersøge hvilke måder der ville være bedst at indføre procedural map generation til spillet. Jeg er startet på map generation ved hjælp af en tutorial, da det er et meget kompleks emne. Tidsmæssigt og læringsmæssigt er en tutorial oplagt, da map generation gør brug af en masse redskaber i unity som jeg ikke har nogen kendskab til endnu. Har lært at det er meget tidskrævende at lave hvert eneste map manuelt.</p>
            `
        },
        {
            id: 4,
            title: "Uge 40 - Flappy bird kopi",
            body: `
                <p>Så nogle online give et tip om at det ville være en god ide at prøve at genskabe simple populære spil, uden at følge en tutorial eller lignende for bedre lære unity. 
                Jeg valgte at lave Flappy bird, da det var et af de forslag som foreslog. Fik lavet en simpel kopi af flappy bird, med score, restart, væggene som bevæger sig og muligheden for at kunne dø i spillet. 
                Lærte mega meget af dette projekt, da jeg ikke følte jeg havde lavet nok i unity udover nogle små emner på hovedprojektet.</p>
                <img src="./blogimages/BlogPicture_Week40_1.png" alt="Image of Flappy bird">
                <p>Fik en meget bedre forståelse af hvordan objekterne i unity virkede, hvordan man brugte vector og lignende. 
                Scripting i Unity gav pludseligt mening efter jeg fik implementeret lyd og lignende i spillet.</p>
                <img src="./blogimages/BlogPicture_Week40_2.png" alt="Image of Flappy bird code">
            `
        },
        {
            id: 5,
            title: "Uge 41 - Procedural Map Generation",
            body: `
            
                <p>Jeg blev endeligt færdig med procedural map generation delen, jeg udskød lidt af afslutte det da jeg ikke helt forstod hvad der foregik i tutorialen, så lærer man ikke så meget. 
                Men efter flappy bird projektet gav alt fuldstændig mening. </p>
                <img src="./blogimages/BlogPicture_Week41_1.png" alt="Image of Map">
                <p>Nedenfor er den primære metode som bliver brugt til at lave vores maps, men det er kun scriptet så det er kun 1/3 af hele processen.</p>
                <img src="./blogimages/BlogPicture_Week41_2.png" alt="Image of Map">
                <p>RunRandomWalk metoden vælger "tilfældige" positioner til at rykke sig en ud fra løbende, uden at bruge samme position to gange. 
                Det er lidt ligesom en slange som udforsker. Den benytter sig af et hashset da hashsets ikke kan indeholde duplicate værdier. </p>
            `
        },
        {
            id: 6,
            title: "Uge 42 - Bat fjende og API",
            body: `
                <p>Havde brug for nogle mindre projekter at arbejde på, da jeg havde travlt med at finde praktikplads.</p>
                <p>Fik påbegyndt API delen, vedrørende mit andet guild.
                Følte lidt at jeg havde glemt nogle af de ting som jeg havde lært i undervisningen i relation til API. Så jeg valgte at give mig selv en refresher og lavede et basisk test projekt.
                Projektet bestod bare af en simpel version af en bank app som havde bruger registrering, som også havde nogle ‘penge’. Opsatte bare en simpel RestAPI som brugte en lokal SQL server.
                </p>
                <img src="./blogimages/BlogPicture_Week42_1.png" alt="Image of Swagger API">
                <p>Jeg har også  lavet en ny enemy som man kan kæmpe mod, planen er at den eventuelt skal kunne sprænge i luften når den kommer i kontakt med spilleren. 
                Det hele var meget nemmere, da en gruppemedlem havde lavet et framework til fjenderne, som jeg kunne bruge til starten. </p>
                <img src="./blogimages/BlogPicture_Week42_2.png" alt="Bat Enemy">
                <p>Animationen af flagermusen, som er fjenden, tog meget længere end jeg havde forventet. For at kunne animere ting i Unity skal man bruge noget der hedder clips. 
                Billedet nedenfor viser noget af det, men det ser meget nemmere ud end det er. </p>
                <img src="./blogimages/BlogPicture_Week42_3.png" alt="Bat Enemy animation">
            `
        },
        {
            id: 7,
            title: "Uge 43 - API Teori",
            body: `
                <p>Havde meget travlt ift. Praktik og samtaler, så ugen blev primært brugt på at se videoer og tage noter til API, de forskellige former for API man kunne benytte sig af.
                Prøvede også at finde på nogle måder vi kunne inkludere API i projektet, på en sjov måde.
                Har også læst lidt op på noget teori til spiludviklings guildet, da det var lidt manglende. 
                Tænker næste uge skal bruges på at skrive teori og dokumentation til projektet.</p>
                <p>Fik kigget på hvilke API typer som er bedst i forskellige situationer. Det er API typer som RestAPI, SOAP og GraphQL som jeg primært undersøgte. 
                Umiddelbart er det oplagt at enten bruge RestAPI eller GraphQL til projektet, men det afhænger lidt efter hvilke ting vi vil inkludere i API’en.</p>
            `
        },
        {
            id: 8,
            title: "Uge 45 - Unity og API",
            body: `
                <p>De sidste to uger blev brugt på at prøve og implementere en simpel version af RestAPI i unity. Det tog lidt tid at forstå hvordan unity håndterede API calls. Endte med at lave endnu et ASP.NET Api project til at håndtere API delen og så satte jeg en SQL Server op til spillet. 
                Endte med at bruge alt for meget tid på at implementere en ScoreFetcher, havde overset jeg havde skrevet porten forkert i inspectoren inde i unity.</p>
                <img src="./blogimages/BlogPicture_Week45_1.png" alt="API Fetch">
                <p>Nuværende er det bare et simpel fetch som er sat op, men meget af logikken ville kunne genbruges.</p>
                <img src="./blogimages/BlogPicture_Week45_2.png" alt="ScoreFetcher">
            `
        },
        {
            id: 9,
            title: "Uge 46 - API Teori og Audio",
            body: `
                <p>Ugen blev primært brug på at læse teori og lignende til API. Det var meget fokuseret på ting vedrørende sikkerhed, såsom tokens til authentication. Venter på at en gruppe kammerat bliver færdig med UI, så jeg kan implementere API til et leaderboard. 
                Men meget af læsningen og videns søgningen var også fokuseret på hvordan dataen bliver delt fra de forskellige punkter. </p>
                <p>Undersøgte også hvordan man optimalt ville implementere audio i et unity spil. Da jeg lavede min flappy bird kopi, der havde jeg problemer med at de forskellige lyde ville overlap og erstatte den anden lyd. Ville nok være en god ide at benytte sig af en state machine eller lignende.</p>
            `
        },
        {
            id: 10,
            title: "Uge 47",
            body: `
                <p></p>
                <p></p>
            `
        },
        
        // Add more post objects here
    ];

    // --- LOGIC TO DISPLAY POSTS ---
    const postsList = document.getElementById("blog-posts-list");
    const postTitle = document.getElementById("blog-title");
    // The "postDate" constant has been removed
    const postBody = document.getElementById("blog-body");

    // Populate the menu on the left
    posts.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        li.dataset.id = post.id;
        postsList.appendChild(li);
    });

    // Handle clicks on the menu
    postsList.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName === "LI") {
            const postId = parseInt(e.target.dataset.id, 10);
            const post = posts.find(p => p.id === postId);

            if (post) {
                // Update the content on the right
                postTitle.textContent = post.title;
                // The line that updated the date has been removed
                postBody.innerHTML = post.body;

                // Highlight the active menu item
                const listItems = postsList.querySelectorAll("li");
                listItems.forEach(item => item.classList.remove("active"));
                e.target.classList.add("active");
            }
        }
    });

    // Optional: Display the first post by default
    if (posts.length > 0) {
        postTitle.textContent = posts[0].title;
        // The line that updated the date has been removed
        postBody.innerHTML = posts[0].body;
        postsList.querySelector("li").classList.add("active");
    }
});