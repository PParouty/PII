using backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using System.Text.Json.Serialization; // pour combattre l'erreur 500 a cause des references circulaire + pour combattre le problem de l'enum en int

var builder = WebApplication.CreateBuilder(args);


// le swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "PII API", // pour presonaliser un peu 
        Version = "v1"
    });
});




// Ajout du DataContext 
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlite("Data Source=PII.db"));

// Ajout des controleurs
//builder.Services.AddControllers();

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles; // gerer le pb qcm/exercice qui cycle 
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()); // gerer le soucis d'enum string vs int 
});


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Lancement de l’app
var app = builder.Build();



// le swagger pt2
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}




// LA (W)EED (seed) pour le remplissage de la bdd  ( on decommentera quand on ajoutera les tables cours et methode): 

/*
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<DataContext>();
    SeedData.Initialize(context);
}*/




// remplissage cours et methode 
/*using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<DataContext>();
    SeedData.Initialize(context);
}*/

// Active les endpoints pour les API

app.UseCors(policy =>
    policy.WithOrigins("http://localhost:4200")
          .AllowAnyHeader()
          .AllowAnyMethod()
);


app.MapControllers();

app.Run();
