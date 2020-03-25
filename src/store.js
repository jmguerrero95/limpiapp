import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import  createPersistedState  from  'vuex-persistedstate'
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    menu: true,
    eliminar: false,
    notificacion: 0,
    showpanel:'compfinduser',
    auxi: 'algo',
    edad: 'algo',
    layoutUserPanel:
      { activeComponent: 'compshedule', notifications: 4, supportPanel: '', supportactive: null, },
    e1: 0,
    paneltitle: 'Agendar servicio',
    overlayAlertGlobal: [
      {
        absolute: true,
        opacity: 0.85,
        overlay: false,
        zIndex: 99,
        boton: false,
      }
    ],
    rollType: [
      'SuperAdmin',
      'Cliente',
      'Auxiliar',
    ],
    warningMessageType: 0,
    warningMessagesAlert: [
      {
        warningTitle: "Error en la aplicacion",
        warningMessage: "Hemos detectado un error en la aplicación, por favor comuniquese con el administrador",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error al iniciar sesión",
        warningMessage: "Verifica que el usuario y/o contraseñas sean correctos e intente de nuevo",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Exito",
        warningMessage: "Inicio de sesion exitoso, Bienvenido",
        warningColor: "light-green ",
        iconWarning: "mdi-hand-peace",
      },
      {
        warningTitle: "Exito",
        warningMessage: "Cambios guardados exitosamente",
        warningColor: "light-green ",
        iconWarning: "mdi-hand-peace",
      },
      {
        warningTitle: "Error al actualizar",
        warningMessage: "Los datos ingresados ya existen, por favor verifique",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Exito",
        warningMessage: "Usuario registrado con exito!!",
        warningColor: "light-green",
        iconWarning: "mdi-hand-peace",
      },
      {
        warningTitle: "Atención",
        warningMessage: "Esta seguro que desea eliminar el usuario?",
        warningColor: "amber",
        iconWarning: "mdi-hand-peace",
      },
      {
        warningTitle: "Atención",
        warningMessage: "Usuario filtrado no esta registrado",
        warningColor: "amber",
        iconWarning: "mdi-hand-peace",
      },
      {
        warningTitle: "Exito",
        warningMessage: "Orden aprobada exitosamente!!",
        warningColor: "light-green",
        iconWarning: "mdi-hand-peace",
      },
      {
        warningTitle: "Error",
        warningMessage: "Revise los campos del formulario señalados e intente nuevamente",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "Correos no coinciden, verifique e intente nuevamente",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "password no coinciden, verifique e intente nuevamente",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "Nombre no debe estar vacio",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "apellido no debe estar vacio",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "cedula no debe estar vacio",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "email no debe estar vacio",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "password no debe estar vacio",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "telefono no debe estar vacia",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "fecha de nacimiento no debe estar vacio",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "direccion no debe estar vacio",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "tipo no debe estar vacio",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Exito",
        warningMessage: "Orden cancelada exitosamente!!",
        warningColor: "light-green",
        iconWarning: "mdi-hand-peace",
      },
      {
        warningTitle: "Atención",
        warningMessage: "Esta seguro que desea cancelar la agenda?",
        warningColor: "amber",
        iconWarning: "mdi-hand-peace",
      },
      {
        warningTitle: "Error",
        warningMessage: "Asegurate de colocar fecha y hora correctamente",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "Debe aceptar los terminos y condiciones",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "Debe llenar el campo persona a cargo",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "Debe llenar el campo direccion",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "Debe llenar el campo observaciones",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Error",
        warningMessage: "Debe seleccionar una ciudad",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
      {
        warningTitle: "Exito",
        warningMessage: "Contraseña enviada al correo, revise su bandeja de entrada",
        warningColor: "light-green ",
        iconWarning: "mdi-hand-peace",
      },
      {
        warningTitle: "Error",
        warningMessage: "Correo no registrado en el sistema",
        warningColor: "red accent-2",
        iconWarning: "mdi-information",
      },
    ],
    userData: [
      {
        avatarImage: require('@/assets/AvatarProfile.jpg'),
        userFirstNames: "Leandro Alberto",
        userLastNames: "Gonzalez Orozco",
        userId: 71797450,
        userEmail: "genoma3d@gmail.com",
        userPhone: "3226601205",
        userBirthDay: new Date().toISOString().substr(0, 10),
        userAddress: "Diag 59 avenida 38 90",
        userRoll: "User",
        userSkills: [
          { taskid: 'int001', skill: 'Preparación de alimentos', active: true, edit: false, check: true },
          { taskid: 'int002', skill: 'Limpieza', active: true, edit: false, check: true },
          { taskid: 'int003', skill: 'Lavado y planchado de ropa', active: true, edit: false, check: true },
        ],

        AssignedServices: [
          { idservice: 717978880001, planselect: "Servico Hogar", notesservice: "Comprar la comida del perro", selectedDays: ["10-04-2020", "12-04-2220"], selectedHour: "12:35 pm", statusservice: false, personinhome: "Andrea Martinez", serviceaddres: "Diagonal 59 avd 38", cityservice: "Medellín", staffid: 71797888 },
          { idservice: 717978881235, planselect: "Servico Hogar", notesservice: "Hacer un buen trabajo, no quebrar nada", selectedDays: ["10-04-2020", "12-04-2220"], selectedHour: "12:35 pm", statusservice: false, personinhome: "Soraida nieto", serviceaddres: "Diagonal 59 avd 38", cityservice: "Medellín", staffid: 71797888 },
        ]


      },
    ],

    staffData: [
      {
        avatarImage: require('@/assets/Sara.jpg'),
        userFirstNames: "Sara Jovana",
        userLastNames: "Ramirez Arteaga",
        userId: 41700888,
        userEmail: "sjovanaa@gmail.com",
        userPhone: "3227111445",
        userBirthDay: new Date().toISOString().substr(0, 10),
        userAddress: "Carrera 70 38 90",
        userRoll: "Auxiliar",
        userSkills: [
          { taskid: 'int001', skill: 'Preparación de alimentos', active: true, edit: false, check: true },
          { taskid: 'int002', skill: 'Limpieza', active: true, edit: true, check: true },
          { taskid: 'int004', skill: 'Atención de niños', active: true, edit: false, check: true },
          { taskid: 'int006', skill: 'Cuidado de mascotas', active: true, edit: false, check: true },
        ],
        AssignedServices: [
          { idservice: 717978881234, planselect: "Servico Hogar", notesservice: "Comprar la comida del perro", selectedDays: ["10-04-2020", "12-04-2220"], selectedHour: "12:35 pm", statusservice: false, personinhome: "Andrea Martinez", serviceaddres: "Diagonal 59 avd 38", cityservice: "Medellín", staffid: 71797888},
          { idservice: 717978881235, planselect: "Servico Hogar", notesservice: "Hacer un buen trabajo, no quebrar nada", selectedDays: ["10-04-2020", "12-04-2220"], selectedHour: "12:35 pm", statusservice: false, personinhome: "Soraida nieto", serviceaddres: "Diagonal 59 avd 38", cityservice: "Medellín", staffid: 71797888},
        ]

      },

      {
        avatarImage: require('@/assets/Omaira.jpg'),
        userFirstNames: "Omaira Maria",
        userLastNames: "Rojas Salinas",
        userId: 71707888,
        userEmail: "omaira@gmail.com",
        userPhone: "3227893445",
        userBirthDay: new Date().toISOString().substr(0, 10),
        userAddress: "Calle 59 avenida 38 90",
        userRoll: "Auxiliar",
        userSkills: [
          { taskid: 'int001', skill: 'Preparación de alimentos', active: false, edit: false, check: true },
          { taskid: 'int002', skill: 'Limpieza', active: true, edit: true, check: true },
          { taskid: 'int004', skill: 'Atención de niños', active: true, edit: false, check: true },
          { taskid: 'int005', skill: 'Acompañamiento para adultos mayores', active: true, edit: false, check: true },
          { taskid: 'int006', skill: 'Cuidado de mascotas', active: true, edit: false, check: true },
        ],
        AssignedServices: [
          { idservice: 717978881234, planselect: "Servico Hogar", notesservice: "Comprar la comida del perro", selectedDays: ["10-04-2020", "12-04-2220"], selectedHour: "12:35 pm", statusservice: false, personinhome: "Andrea Martinez", serviceaddres: "Diagonal 59 avd 38", cityservice: "Medellín", staffid: 71797888, selectedprofessional:"Luz Mirian", pictureselect:"Sara"},

          { idservice: 717978881237, planselect: "Servico Hogar", notesservice: "Comprar la comida del perro", selectedDays: ["21-04-2020", "22-04-2220" , "22-04-2220"], selectedHour: "7:35 am", statusservice: false, personinhome: "Andrea Martinez", serviceaddres: "Diagonal 59 avd 38", cityservice: "Medellín", staffid: 71797888, selectedprofessional:"Luz Mirian", pictureselect:"Sara"}
        ]


      },

      {
        avatarImage: require('@/assets/Omaira.jpg'),
        userFirstNames: "Luz Mirian",
        userLastNames: "Hernadez Mochuelo",
        userId: 17145782,
        userEmail: "omaira@gmail.com",
        userPhone: "3227893445",
        userBirthDay: new Date().toISOString().substr(0, 10),
        userAddress: "Calle 59 avenida 38 90",
        userRoll: "Auxiliar",
        userSkills: [
          { taskid: 'int001', skill: 'Preparación de alimentos', active: false, edit: false, check: true },
          { taskid: 'int002', skill: 'Limpieza', active: true, edit: true, check: true },
          { taskid: 'int004', skill: 'Atención de niños', active: true, edit: false, check: true },
          { taskid: 'int005', skill: 'Acompañamiento para adultos mayores', active: true, edit: false, check: true },
          { taskid: 'int006', skill: 'Cuidado de mascotas', active: true, edit: false, check: true },
        ],
        AssignedServices: [
          { idservice: 717978881234, planselect: "Servico Hogar", notesservice: "Comprar la comida del perro", selectedDays: ["10-04-2020", "12-04-2220"], selectedHour: "12:35 pm", statusservice: false, personinhome: "Andrea Martinez", serviceaddres: "Diagonal 59 avd 38", cityservice: "Medellín", staffid: 71797888, selectedprofessional:"Luz Mirian", pictureselect:"Omaira.jpg"},

          { idservice: 717978881235, planselect: "Servico Hogar", notesservice: "Hacer un buen trabajo, no quebrar nada", selectedDays: ["10-04-2020", "12-04-2220"], selectedHour: "12:35 pm", statusservice: false, personinhome: "Soraida nieto", serviceaddres: "Diagonal 59 avd 38", cityservice: "Medellín", staffid: 71797888 },
        ]

      },

    ],

    specialServices: [
      { taskid: 'int001', skill: 'Cuidado de menores', active: true, edit: false, check: true },
      { taskid: 'int002', skill: 'Cuidado de adulto mayor', active: true, edit: false, check: true },
      { taskid: 'int003', skill: 'Atencion a mascotas', active: true, edit: false, check: true },
      { taskid: 'int004', skill: 'Limpieza zonas comunes', active: true, edit: false, check: true },
      { taskid: 'int005', skill: 'Preparacion de alimentos', active: true, edit: false, check: true },
      { taskid: 'int006', skill: 'Servicio de cafeteria', active: true, edit: false, check: true },
      { taskid: 'int007', skill: 'Diligencias y compras', active: true, edit: false, check: true },

    ],

    modalServices:[
      {serviceid: "modal001", active: true, servicename:"Hogar", edit: false, check: true},
      {serviceid: "modal002", active: true, servicename:"Pymes", edit: false, check: true},
    ],


    servicePoint: [{ authorizedUser: '', addressPoint: 'Inserte aquí la dirección', noteService: '' }],




    citiesAntioquia: ['Medellín', 'Envigado', 'Sabaneta', 'Caldas', 'Itagüí', 'La estrella', 'Bello', 'Copacabana', 'Girardota', 'Barbosa', 'Santa Elena', 'Rionegro', 'Sopetrán', 'San Jerónimo', 'El retiro', 'La Ceja'],

    servicesComp: {
      responsible: 'Dora Suarez',
      serviceAddress: 'Diagonal 59',
      citySelect: 'Medellín',
      notes: 'Se debe sacar al perro en la tarde; no tenemos utencilios de aseo, por favor traer lo necesario'
    },
    step1:{
      tipo: 0,
      id_tipo: 0,
      modalidad: 0,
      id_modalidad: 0,
    },
    step2:{
      date: 0,
      picker: 0,
    },
    step3:{
      id: 0,
      ident: 0,
      firs_name: 0,
      last_name: 0,
      image: 0,
      user_email: 0,
      edad: 0,
    },
    step4:{
      persona:0,
      lugar:0,
      observaciones:0,
      ciudad:0,
    },
    user:{
      id:0,
      firs_name:0,
      last_name:0,
      user_email:0,
      tipo:0,
      image:0,
      ident:0,
      userPhone:0,
      user_Address:0,
      birthDay:0,
    }
  },
  actions: {
      loadAuxi ({commit}, fechas, modalidad) {
      var age=[];
      var info=[];
      var path = 'https://limpi.app:8000/api/v1.0/agenda_filter/?fechas='+fechas.fechas+'&modalidad='+fechas.modalidad
      axios
        .get(path)
        .then(data => {
          info=data.data[0]
          //info=info[0]
          //info=info[0]
          info.forEach(edades);
          function edades(item,index){
            var fecha = item.birthDay
            if(fecha){
              var values=fecha.split("-");
              var dia = values[2];
              var mes = values[1];
              var ano = values[0];
              // cogemos los valores actuales
              var fecha_hoy = new Date();
              var ahora_ano = fecha_hoy.getYear();
              var ahora_mes = fecha_hoy.getMonth()+1;
              var ahora_dia = fecha_hoy.getDate();
       
              // realizamos el calculo
              var edad = (ahora_ano + 1900) - ano;
              if ( ahora_mes < mes )
              {
                  edad--;
              }
              if ((mes == ahora_mes) && (ahora_dia < dia))
              {
                  edad--;
              }
              if (edad > 1900)
              {
                  edad -= 1900;
              }
       
              // calculamos los meses
              var meses=0;
              if(ahora_mes>mes)
                  meses=ahora_mes-mes;
              if(ahora_mes<mes)
                  meses=12-(mes-ahora_mes);
              if(ahora_mes==mes && dia>ahora_dia)
                  meses=11;
       
              // calculamos los dias
              var dias=0;
              if(ahora_dia>dia)
                  dias=ahora_dia-dia;
              if(ahora_dia<dia)
              {
                  var ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
                  dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
              }
              //console.log(edad)
              Object.defineProperties(info[index],{
                edad:{
                  value: edad
                }
              })
              //info.push(edad)
            }
            commit('edades',age)
          }
        commit('auxi_agen',info)
          /*var info = JSON.stringify(data.data)
          state.fechas = info;
          console.log(info)*/
        })
        .catch(error =>{
        })
    },
  },
  mutations: {
    bar(state, ocultar){
      state.menu=ocultar
    },
    elimi(state, payload){
      state.eliminar=payload.eliminar
    },
    popup(state, payload){
      state.overlayAlertGlobal[0].overlay = payload.overlay
      state.warningMessageType = payload.tipo
      state.overlayAlertGlobal[0].boton = payload.boton
    },
    notificaciones(state, payload){
      state.notificacion = payload
    },
    change(state, payload){
      state.showpanel = payload.showpanel
    },
    login(state, payload){
      state.user.id = payload.id
      state.user.firs_name = payload.firs_name
      state.user.last_name = payload.last_name
      state.user.user_email = payload.user_email
      state.user.tipo = payload.tipo
      state.user.image = 'https://limpi.app:8000'+payload.image
      state.user.ident = payload.ident
      state.user.userPhone = payload.userPhone
      state.user.user_Address = payload.user_Address
      state.user.birthDay = payload.birthDay
    },
    step1(state, payload){
      state.step1.tipo = payload.tipo
      state.step1.id_tipo = payload.id_tipo
      state.step1.modalidad = payload.modalidad
      state.step1.id_modalidad = payload.id_modalidad
    },
    step2(state, payload){
      state.step2.date = payload.date
      state.step2.picker = payload.picker
    },
    step3(state, payload){
      state.step3.id = payload.id
      state.step3.ident = payload.ident
      state.step3.firs_name = payload.firs_name
      state.step3.last_name = payload.last_name
      state.step3.image = payload.image
      state.step3.user_email = payload.user_email
      state.step3.edad = payload.edad
    },
    step4(state, payload){
      state.step4.persona = payload.persona
      state.step4.lugar = payload.lugar
      state.step4.observaciones = payload.observaciones
      state.step4.ciudad = payload.ciudad
      
    },
    step5(){
      
    },
    auxi_agen(state, auxi){
      state.auxi = auxi
    },
    edades(state, edad){
      state.edad = edad
    },

    GoNextState(state, page) {
      state.e1 = page
    },

    resetScrollPage() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });

    },

    UpdateComponent(state, componentname) {

      state.layoutUserPanel.activeComponent = componentname
      switch (componentname) {
        case 'usermanagement':
          state.paneltitle = 'Manejo de usuario'
          break;
        case 'compuserdata':
          state.paneltitle = 'Panel de usuario'
          break;
        case 'compshedule':
          state.paneltitle = 'Agendar servicio'
          break;
        case 'compactiveservices':
          state.paneltitle = 'Servicios activos'
          break;
        case 'comphistory':
          state.paneltitle = 'Historial de servicios'
          break;
        case 'compnotifications':
          state.paneltitle = 'Alertas y notificaciones'
          break;
        case 'editUser':
          state.paneltitle = 'editar usuario desde admin'
          break;
        default:
          state.paneltitle = 'Agendar servicio'
          break;
      }
    },
    SupportAction(state) {
      state.layoutUserPanel.supportPanel = "compsupport"
      state.layoutUserPanel.supportactive = true;

    },
    CloseSupportAction(state) {

      state.layoutUserPanel.supportactive = false;

    }
  },
  plugins: [createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })]
})
