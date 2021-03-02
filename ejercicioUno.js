/**Alumno: Nicolás Mongia,
 * División: 1 G,
 * Censo Municipal
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
 */


function probarEjercicio(){

	var tipomascotaIngresada;
	var tipopelajedemascota;
	var edadmascota;
	var nombremascota;
	var razamascota;
	var pesomascota;
	var estadoClinico;
	var temperaturaCorporal;
	var perromaspesado;
	var nombreperromaspesado;
	var gatomasliviano;
	var pesogatomasliviano;
	var razagatomasliviano;
	var porcentajedeenfermos;
	var contadorotros = 0;
	var contadorperros = 0,
	var contadordgatos = 0;
	var contadorgatosenfermos = 0;
	var contadorperrosenfermos = 0;
	var contadorotrosenfermos = 0;
	var contadorgatosinternados = 0;
	var contadorperrosinternados = 0;
	var contadorotrosinternados = 0;
	var contadorgatosadopcion = 0;
	var contadorperrosadopcion = 0;
	var contadorotrosadopcion = 0;
	var cantidadtotaldeanimales = 0;
	var acumuladorpesogatos = 0;
	var acumuladorpesoperros = 0;
	var acumuladorpesootros = 0;
	var acumuladortotaldepeso = 0;
	var acumuladortemperaturagatos = 0;
	var acumuladortemperaturaperros = 0;
	var acumuladortemperaturaotros = 0;
	var totalperrosygatos;
	var porcentajesobretotaldeperrosygatos;
	var promediotemperaturagatos;
	var promediotemperaperros;
	var promediotemperaturaotros;
	var nombreotrosultimo;
	var sinpeloconmenortemperatura;
	var temperaturamenorsinpelo;
	var tipoanimalmayortemperatura;
	var promediotemperaturamayor;
	var promediototalpeso;
	var estadoclinicoconmenorcantidaddemascotas;
	var contadortotalenfermos;
	var contadortotalinternados;
	var contadortotaladopcion;
	var flagprimeravezgatomasliviano = true;
	var flagprimeravezperromaspesado = true;
	var flagmenortemperaturaprimeravez = true;
	


	var respuesta;


	do
	{
		tipomascotaIngresada = prompt("ingrese un tipo de mascota");
		while(tipomascotaIngresada != "perro" && tipomascotaIngresada != "gato" && tipomascotaIngresada != "otro")
		{
			tipomascotaIngresada = prompt("ERROR!, el tipo de mascota no es valido, intentelo nuevamente");
		}
		tipopelajedemascota = prompt("que tipo de pelaje tiene su mascota?");
		while(tipopelajedemascota != "corto" && tipopelajedemascota != "largo" && tipopelajedemascota != "sin pelo")
		{
			tipopelajedemascota = prompt("ERROR!, el tipo de pelaje no es valido, por favor intentelo nuevamente");
		}
		edadmascota = prompt("ingrese la edad de la mascota");
		edadmascota = parseInt(edadmascota);
		while(isNaN(edadmascota) || edadmascota<0)
		{
			edadmascota = prompt("ERROR!, la edad ingresada no es valida, por favor intentelo nuevamente");
			edadmascota = parseInt(edadmascota);
		}
		nombremascota = prompt("ingrese el nombre de su mascota");
		while(isNaN(nombremascota)==false)
		{
			nombremascota = prompt("ERROR!, el nombre ingresado no es valido, intentelo nuevamente");
		}
		razamascota = prompt("ingrese la raza de su mascota");
		while(isNaN(razamascota)==false)
		{
			razamascota = prompt("ERROR!, la raza ingresada no es valida, por favor intentelo nuevamente");
		}
		pesomascota = prompt("ingrese el peso de su mascota");
		pesomascota = parseInt(pesomascota);
		while(isNaN(pesomascota) || pesomascota<0)
		{
			pesomascota = prompt("ERROR!, el peso ingresado no es valido, por favor intentelo nuevamente");
			pesomascota = parseInt(pesomascota);
		}
		estadoClinico = prompt("ingrese el estado clinico de su mascota");
		while(estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion")
		{
			estadoClinico = prompt("ERROR!, el estado clinico no es valido, por favor intentelo nuevamente");
		}
		temperaturaCorporal = prompt("ingrese la temperatura corporal de su mascota");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while(temperaturaCorporal<30 || temperaturaCorporal<80)
		{
			temperaturaCorporal = prompt("ERROR!, la temperatura corporal no esvalida, porfavor intentelo nuevamente");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}
		switch(tipomascotaIngresada)
		{
			case "gato":
				contadordgatos++;
				acumuladorpesogatos = acumuladorpesogatos + pesomascota;
				acumuladortemperaturagatos = acumuladortemperaturagatos + temperaturaCorporal;
				promediotemperaturagatos = acumuladortemperaturagatos/contadordgatos;
				switch(estadoClinico)
				{	
					case "enfermo":
						contadorgatosenfermos++;
						break;
					case "internado":
						contadorgatosinternados++;
						break;
					case "adopcion":
						contadorgatosadopcion;
						break;	
				}
				if(flagprimeravezgatomasliviano == true && tipopelajedemascota == "sin pelo")
				{
					gatomasliviano = nombremascota;
					razagatomasliviano = razamascota;
					pesogatomasliviano = pesomascota;
					flagprimeravezgatomasliviano = false;
				}
				else
				{
					if(pesomascota<pesogatomasliviano && tipopelajedemascota == "sin pelo")
					{
						gatomasliviano = nombremascota;
						razagatomasliviano = razamascota;
						pesogatomasliviano = pesomascota;
					}
				}
				break;
			case "perro":
				contadorperros++;
				acumuladorpesoperros = acumuladorpesoperros + pesomascota;
				acumuladortemperaturaperros = acumuladortemperaturaperros + temperaturaCorporal;
				promediotemperaperros = acumuladortemperaturaperros/contadorperros;
				switch(estadoClinico)
				{
					case "enfermo":
						contadorperrosenfermos++;
						break;
					case "internado":
						contadorperrosinternados++;
						break;
					case "adopcion":
						contadorperrosadopcion++;
						break;
				}
				if(flagprimeravezperromaspesado == true)
				{
					perromaspesado = pesomascota;
					nombreperromaspesado = nombremascota;
					flagprimeravezperromaspesado = false;
				}
				else
				{
					if(pesomascota>perromaspesado)
					{
						perromaspesado = pesomascota;
						nombreperromaspesado = nombremascota;
					}
				}
				break;
			case "otro":
				contadorotros++;
				acumuladorpesootros = acumuladorpesootros + pesomascota;
				acumuladortemperaturaotros = acumuladortemperaturaotros + temperaturaCorporal;
				promediotemperaturaotros = acumuladortemperaturaotros/contadorotros;
				nombreotrosultimo = nombremascota;
				if(estadoClinico == "enfermo")
				{
					contadorotrosenfermos++;
				}	
		}

		if(flagmenortemperaturaprimeravez == true && tipopelajedemascota == "sin pelo")
		{
			sinpeloconmenortemperatura = nombremascota;
			temperaturamenorsinpelo = temperaturaCorporal;
			flagmenortemperaturaprimeravez = false;
		}
		else
		{
			if(temperaturaCorporal<temperaturamenorsinpelo)
			{
				sinpeloconmenortemperatura = nombremascota;
				temperaturamenorsinpelo = temperaturaCorporal;
			}
		}
		if(promediotemperaturagatos>promediotemperaperros && promediotemperaturagatos>promediotemperaturaotros)
		{
			promediotemperaturamayor = promediotemperaturagatos;
			tipoanimalmayortemperatura = "Gato";
		}
		else
		{
			if(promediotemperaperros>promediotemperaturaotros)
			{
				promediotemperaturamayor = promediotemperaperros;
				tipoanimalmayortemperatura = "Perro";
			}
			else
			{
				promediotemperaturamayor = promediotemperaturaotros;
				tipoanimalmayortemperatura = "Otros";
			}
		}

		respuesta = confirm("desea ingresar una nueva mascota a la ase de datos?");
	}while(respuesta == true);

	contadortotalenfermos = contadorgatosenfermos + contadorperrosenfermos + contadorotrosenfermos;
	contadortotalinternados = contadorgatosinternados + contadorperrosinternados + contadorotrosinternados;
	contadortotaladopcion = contadorgatosadopcion + contadorperrosadopcion + contadorotrosadopcion;

	if(contadortotalenfermos<contadortotalinternados && contadortotalenfermos<contadortotaladopcion)
	{
		estadoclinicoconmenorcantidaddemascotas = "Enfermos";
	}
	else
	{
		if(contadortotalinternados<contadortotaladopcion)
		{
			estadoclinicoconmenorcantidaddemascotas = "Internados";
		}
		else
		{
			estadoclinicoconmenorcantidaddemascotas = "Adopción";
		}
	}

	cantidadtotaldeanimales = contadordgatos + contadorperros + contadorotros;
	acumuladortotaldepeso =  acumuladorpesogatos + acumuladorpesoperros + acumuladorpesootros;
	porcentajedeenfermos = (contadorgatosenfermos+contadorperrosenfermos+contadorotrosenfermos) * cantidadtotaldeanimales / 100;
	totalperrosygatos = contadorperros + contadordgatos;
	porcentajesobretotaldeperrosygatos = (totalperrosygatos*100) / cantidadtotaldeanimales;
	promediototalpeso = acumuladortotaldepeso / cantidadtotaldeanimales;
	
	//a)El perro mas pesado

	document.write("el perro mas pesado es: "+nombreperromaspesado+" con un peso de: "+perromaspesado+"<br>");
	document.write("el porcentaje de animales enfermos sobre el total de animales es: "+porcentajedeenfermos+"<br>");
	document.write("el nombre de la ultima mascota ingresada del tipo -otros- es: "+nombreotrosultimo+"<br>");
	document.write("el animal sin pelo con menor temperatura corporal es: "+sinpeloconmenortemperatura+"con una temperatura de: "+temperaturamenorsinpelo+"<br>");
	document.write("el tipo de animal con mayor temperatura corporal promedio es: "+tipoanimalmayortemperatura+"con una temperatura de: "+promediotemperaturamayor+"<br>");
	document.write("la suma de gatos y perros reprecenta un porcentaje del "+porcentajesobretotaldeperrosygatos+" % sobre el total"+"<br>");
	document.write("El estado clinico con menor cantidad de animales es: "+estadoclinicoconmenorcantidaddemascotas+"<br>");
	document.write("el promedio total de peso de los animales es: "+promediototalpeso+"<br>");
	document.write("el nombre del gato mas liviano es: "+gatomasliviano+" su raza es: "+razagatomasliviano+" y su peso: "+pesogatomasliviano+"<br>");


}
