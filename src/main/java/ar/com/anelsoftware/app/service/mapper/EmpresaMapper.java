package ar.com.anelsoftware.app.service.mapper;

import ar.com.anelsoftware.app.domain.*;
import ar.com.anelsoftware.app.service.dto.EmpresaDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Empresa and its DTO EmpresaDTO.
 */
@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface EmpresaMapper extends EntityMapper<EmpresaDTO, Empresa> {

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "user.login", target = "userLogin")
    EmpresaDTO toDto(Empresa empresa);

    @Mapping(source = "userId", target = "user")
    Empresa toEntity(EmpresaDTO empresaDTO);

    default Empresa fromId(Long id) {
        if (id == null) {
            return null;
        }
        Empresa empresa = new Empresa();
        empresa.setId(id);
        return empresa;
    }
}
